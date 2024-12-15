import type { Metadata } from "next";
import RTK from "@omdb/providers/rtk";
import RootLayoutView from "@omdb/layouts/root";

import "@omdb/styles/index.scss";

export const metadata: Metadata = {
  title: "OMDB Frontend App",
  description: "Custom table with search and pagination",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RTK>
          <RootLayoutView>{children}</RootLayoutView>
        </RTK>
      </body>
    </html>
  );
}
