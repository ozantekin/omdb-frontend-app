interface OmdbApiParamsBase {
  type?: "movie" | "series" | "episode";
  y?: number;
  r?: "json" | "xml";
  callback?: string;
  v?: number;
}

interface OmdbByIdOrTitleParams extends OmdbApiParamsBase {
  i?: string;
  t?: string;
  plot?: "short" | "full";
}

interface OmdbBySearchParams extends OmdbApiParamsBase {
  s: string;
  page?: number;
}

type OmdbApiParams = OmdbByIdOrTitleParams | OmdbBySearchParams;
