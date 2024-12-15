import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchInput(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <div className="search-input">
      <MagnifyingGlass className="search-input__icon" />
      <input
        type="text"
        placeholder="Search"
        {...props}
        className="search-input__field"
      />
    </div>
  );
}
