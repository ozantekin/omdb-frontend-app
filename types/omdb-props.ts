type TypeProps = "movie" | "series" | "episode";

interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: TypeProps;
  Poster: string;
}

interface MovieDetailsProps extends MovieProps {
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Awards: string;
  Runtime: string;
}

interface PosterProps {
  Poster: string;
}

interface SearchMoviesParams {
  title: string;
  type?: TypeProps;
  year?: number;
  page?: number;
}

interface GetMovieDetailsParams {
  id?: string;
  title?: string;
  plot?: "short" | "full";
}
