"use client";
import Table from "@omdb/components/table";
import { useSearchMoviesQuery } from "@omdb/services";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebounceCallback } from "@omdb/hooks/useDebounceCallback";
import { TYPE_OPTIONS, YEAR_OPTIONS } from "@omdb/constants/filter";
import TypeBadge from "@omdb/components/type-badge";
import Image from "next/image";

export default function MoviePageView() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("title") || "");
  const [year, setYear] = useState(searchParams.get("year") || "");
  const [type, setType] = useState<TypeProps>(
    (searchParams.get("type") as TypeProps) || "movie"
  );
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const { data, isLoading, isError } = useSearchMoviesQuery({
    title: searchTerm.length >= 3 ? searchTerm : "Pokemon",
    type: type || "movie",
    year,
    page,
  });

  const handleSearchChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearchTerm(value);
    debouncedSearch(value);
    updateQueryParams({ title: value, page: 1 });
  };

  const handleYearChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(value);
    setPage(1);
    updateQueryParams({ year: value, page: 1 });
  };

  const handleTypeChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setType(value as TypeProps);
    setPage(1);
    updateQueryParams({ type: value, page: 1 });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    updateQueryParams({ page: newPage });
  };

  const updateQueryParams = (params: Record<string, string | number>) => {
    const updatedParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value === "" || value === null || value === undefined) {
        updatedParams.delete(key);
      } else {
        updatedParams.set(key, String(value));
      }
    });

    replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
  };

  const debouncedSearch = useDebounceCallback((value: string) => {
    updateQueryParams({ title: value, page: 1 });
  }, 500);

  const handleReset = () => {
    setYear("");
    setSearchTerm("");
    setPage(1);
    setType("movie");
    replace(pathname, { scroll: false });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "Title" as keyof MovieSearchProps,
      key: "title",
      render: (value: string, record: MovieSearchProps) => (
        <Link href={`/movie/${record.imdbID}`} className="movies-table__link">
          <Image
            src={
              record.Poster !== "N/A" ? record.Poster : "/assets/fallback.avif"
            }
            alt={value}
            width={50}
            height={50}
          />
          <span>{value}</span>
        </Link>
      ),
    },
    {
      title: "Year",
      dataIndex: "Year" as keyof MovieSearchProps,
      key: "year",
    },
    {
      title: "Type",
      dataIndex: "Type" as keyof MovieSearchProps,
      key: "type",
      render: (value: string) => <TypeBadge type={value as TypeProps} />,
    },
  ];

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={year} onChange={handleYearChange}>
          {YEAR_OPTIONS.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select value={type} onChange={handleTypeChange}>
          {TYPE_OPTIONS.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button onClick={handleReset}>Reset</button>
      </div>

      <Table<MovieSearchProps>
        columns={columns}
        data={data?.Search || []}
        totalResults={Number(data?.totalResults) || 0}
        onPageChange={handlePageChange}
        currentPage={page}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}
