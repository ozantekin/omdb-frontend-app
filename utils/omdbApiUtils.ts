const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

if (!API_KEY) {
  throw new Error("OMDB API key is missing! Please set it in your .env file.");
}

export const serializeParamsWithApiKey = (params: OmdbApiParams): string => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    queryParams.set(key, String(value));
  });

  queryParams.set("apikey", API_KEY);

  return queryParams.toString();
};
