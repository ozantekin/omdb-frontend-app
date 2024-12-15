type ResponseProps = "True" | "False";

interface RatingProps {
  Source: string;
  Value: string;
}

interface MovieSearchProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: TypeProps;
  Poster: string;
}

interface MovieProps {
  Response: ResponseProps;
  Search: MovieSearchProps[];
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
  Ratings: RatingProps[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: ResponseProps;
}

interface PosterProps {
  Title: string;
  Poster: string;
  Year: string;
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
  Ratings: RatingProps[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: TypeProps;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: ResponseProps;
}
