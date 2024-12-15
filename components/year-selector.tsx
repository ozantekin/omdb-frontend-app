"use client";
import { Calendar } from "@phosphor-icons/react";
import { useState } from "react";

interface YearSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function YearSelector({ value, onChange }: YearSelectorProps) {
  const [isYearDropdownOpen, setYearDropdownOpen] = useState(false);

  const years = Array.from(
    { length: new Date().getFullYear() - 1899 },
    (_, i) => (1900 + i).toString()
  ).reverse();

  const toggleYearDropdown = () => {
    setYearDropdownOpen((prev) => !prev);
  };

  const handleYearClick = (selectedYear: string) => {
    onChange(selectedYear);
    setYearDropdownOpen(false);
  };

  return (
    <div className="base-input">
      <Calendar className="base-input__icon" />
      <input
        type="text"
        readOnly
        value={value}
        onClick={toggleYearDropdown}
        placeholder="Select Year"
        className="base-input__field"
      />
      {isYearDropdownOpen && (
        <ul className="year-dropdown">
          {years.map((yr) => (
            <li
              key={yr}
              onClick={() => handleYearClick(yr)}
              className="year-item"
            >
              {yr}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
