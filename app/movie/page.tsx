import MoviesTable from "@omdb/modules/movies-table";
import { Suspense } from "react";

export default function MoviePage() {
  return (
    <Suspense fallback="Loading...">
      <MoviesTable />
    </Suspense>
  );
}
