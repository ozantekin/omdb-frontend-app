type TypeProps = "movie" | "series" | "episode";

interface MovieProps {
  Response: "True" | "False";
  Search?: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: TypeProps;
    Poster: string;
  }[];
  Error?: string;
  totalResults?: string;
}

interface MovieDetailsProps {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True" | "False";
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
