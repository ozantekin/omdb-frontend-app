"use client";
import { useGetMovieDetailsQuery } from "@omdb/services";
import { useParams } from "next/navigation";

export default function MovieDetail() {
  const { slug } = useParams();

  const { data: movieData, isLoading: isMovieLoading } =
    useGetMovieDetailsQuery({
      id: slug as string,
    });

  if (isMovieLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Genre: {movieData?.Genre}</p>
      <p>Director: {movieData?.Director}</p>
      <p>Cast: {movieData?.Actors}</p>
      <p>IMDb Rating: {movieData?.imdbRating}</p>
      <p>Duration: {movieData?.Runtime}</p>
      <p>Plot: {movieData?.Plot}</p>
    </div>
  );
}
