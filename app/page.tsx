"use client";
import styles from "./page.module.css";
import { useSearchMoviesQuery } from "@omdb/services";

export default function Home() {
  const { data } = useSearchMoviesQuery({
    title: "Batman",
    type: "movie",
    year: 1989,
  });

  return (
    <div className={styles.page}>
      <pre>{JSON.stringify(data?.Search, null, 2)}</pre>
    </div>
  );
}
