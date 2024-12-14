import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serializeParamsWithApiKey } from "../utils/omdbApiUtils";

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com/",
    paramsSerializer: serializeParamsWithApiKey,
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<
      ApiResponseProps<MovieProps[]>,
      SearchMoviesParams
    >({
      query: ({ title, type, year, page }) => ({
        url: "",
        params: {
          s: title,
          type,
          y: year,
          page,
        },
      }),
    }),

    getMovieDetails: builder.query<
      ApiResponseProps<MovieDetailsProps>,
      GetMovieDetailsParams
    >({
      query: ({ id, title, plot }) => ({
        url: "",
        params: {
          i: id,
          t: title,
          plot,
        },
      }),
    }),

    getMoviePoster: builder.query<ApiResponseProps<PosterProps>, string>({
      query: (id) => ({
        url: "",
        params: {
          i: id,
        },
        baseUrl: "http://img.omdbapi.com/",
      }),
    }),
  }),
});
