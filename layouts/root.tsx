import { NAVIGATION } from "@omdb/constants/menu";
import Link from "next/link";

export default function RootLayoutView({ children }: ChildrenProps) {
  return (
    <>
      <header className="root root__header">
        {NAVIGATION.map(({ href, label }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </header>
      <main className="root__main">{children}</main>
      <footer className="root root__footer">
        © 2024 OT. All rights reserved.
      </footer>
    </>
  );
}
