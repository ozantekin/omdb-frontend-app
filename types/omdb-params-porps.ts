type TypeProps = "movie" | "series" | "episode";
type PlotProps = "short" | "full";

interface OmdbApiParamsBase {
  type?: TypeProps;
  y?: number;
  r?: "json" | "xml";
  callback?: string;
  v?: number;
}

interface OmdbByIdOrTitleParams extends OmdbApiParamsBase {
  i?: string;
  t?: string;
  plot?: PlotProps;
}

interface OmdbBySearchParams extends OmdbApiParamsBase {
  s: string;
  page?: number;
}

type OmdbApiParams = OmdbByIdOrTitleParams | OmdbBySearchParams;

interface SearchMoviesParams {
  title: string;
  type?: TypeProps;
  year?: string;
  page?: number;
}

interface GetMovieDetailsParams {
  id?: string;
  title?: string;
  plot?: PlotProps;
}
