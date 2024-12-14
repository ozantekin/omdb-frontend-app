interface ApiResponseProps<T> {
  Response: "True" | "False";
  Error?: string;
  totalResults?: string;
  Search?: T;
}
