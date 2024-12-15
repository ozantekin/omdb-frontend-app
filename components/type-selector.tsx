interface TypeSelectorProps {
  value: TypeProps;
  options: TypeProps[];
  onChange: (value: TypeProps) => void;
}

export default function TypeSelector({
  value,
  options,
  onChange,
}: TypeSelectorProps) {
  return (
    <div className="type-selector">
      {options.map((option) => (
        <label key={option} className="type-selector__label">
          <input
            type="radio"
            name="type"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="type-selector__input"
          />
          <span className="type-selector__text">{option}</span>
        </label>
      ))}
    </div>
  );
}
