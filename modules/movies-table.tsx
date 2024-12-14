"use client";
import { useSearchMoviesQuery } from "@omdb/services";
import Link from "next/link";

export default function MoviesTable() {
  const { data, isLoading, isError } = useSearchMoviesQuery({
    title: "Batman",
    type: "movie",
    year: 1989,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <ul>
      {data?.Search?.map((movie) => (
        <li key={movie.imdbID}>
          <Link href={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
        </li>
      ))}
    </ul>
  );
}
