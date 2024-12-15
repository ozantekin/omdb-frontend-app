import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchInput(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <div className="base-input">
      <MagnifyingGlass className="base-input__icon" />
      <input
        type="text"
        placeholder="Search"
        {...props}
        className="base-input__field"
      />
    </div>
  );
}
