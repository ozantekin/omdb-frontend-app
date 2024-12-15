"use client";
import { useGetMoviePosterQuery } from "@omdb/services";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

import TypeBadge from "@omdb/components/type-badge";
import { convertMinutesToReadableTime } from "@omdb/utils/timeUtils";

export default function MovieDetailsPageView() {
  const { slug } = useParams();
  const { data, isLoading } = useGetMoviePosterQuery(slug as string);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <>
      <Link href="/movie">
        <button>← Back</button>
      </Link>

      <div className="container">
        {data?.Poster && (
          <section className="leftSide">
            <figure className="posterWrapper">
              <Image
                src={
                  data?.Poster !== "N/A" ? data.Poster : "/assets/fallback.avif"
                }
                alt={data?.Title || "Movie Poster"}
                width={400}
                height={600}
                priority={true}
                draggable={false}
                className="posterImage"
              />
            </figure>
          </section>
        )}

        <section className="rightSide">
          <div className="rightSide__box">
            <h1 className="title">{data?.Title}</h1>
            <div className="movieInfo">
              <span>{data?.Year}</span>
              <span>{data?.Rated}</span>
              <span>{convertMinutesToReadableTime(data?.Runtime)}</span>
            </div>
            <p>{data?.Plot}</p>
            <TypeBadge type={data?.Type as TypeProps} />
          </div>

          <div className="rightSide__box">
            <p>
              <strong>Director:</strong> {data?.Director}
            </p>
            <p>
              <strong>Writers:</strong> {data?.Writer}
            </p>
            <p>
              <strong>Stars:</strong> {data?.Actors}
            </p>
            <p>
              <strong>Awards:</strong> {data?.Awards}
            </p>
          </div>

          <div className="rightSide__box">
            <div className="movieInfo">
              <span>{data?.imdbRating}/10</span>
              <span>({data?.imdbVotes} votes)</span>
            </div>
            <div className="movieInfo">
              <span>{data?.Metascore}</span>
              <span>Metascore</span>
            </div>
            <div className="imdbLink">
              <Link
                href={`https://www.imdb.com/title/${data?.imdbID}`}
                target="_blank"
              >
                View on IMDb
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
