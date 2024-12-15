"use client";

import { useSearchMoviesQuery } from "@omdb/services";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const { data } = useSearchMoviesQuery({
    title: "Pokemon",
    type: "movie",
  });

  return (
    <div>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Discover Amazing Movies, TV Series, and More!
          </h1>
          <p className="hero__description">
            Search, explore, and dive into the world of entertainment with the
            latest information on movies and TV shows.
          </p>
          <Link href="/movie">
            <button className="hero__cta">Start Exploring</button>
          </Link>
        </div>
      </section>

      {data && (
        <section className="movies-grid">
          {data?.Search?.slice(0, 3).map((movie: MovieSearchProps) => (
            <div key={movie.imdbID} className="movie-card">
              <figure>
                <Image
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "/assets/fallback.avif"
                  }
                  alt={movie.Title}
                  width={400}
                  height={600}
                  draggable={false}
                  className="movie-card__poster"
                />
              </figure>
              <h3 className="movie-card__title">{movie.Title}</h3>
              <p className="movie-card__release">{movie.Year}</p>
              <Link href={`/movie/${movie.imdbID}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
