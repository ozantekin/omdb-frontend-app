"use client";
import { store } from "@omdb/store";
import { Provider } from "react-redux";

export default function RTK({ children }: ChildrenProps) {
  return <Provider store={store}>{children}</Provider>;
}
