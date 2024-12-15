import MoviesPageView from "@omdb/modules/movies";
import { Suspense } from "react";

export default function MoviesPage() {
  return (
    <Suspense fallback="Loading...">
      <MoviesPageView />
    </Suspense>
  );
}
