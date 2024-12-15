interface TypeBadgeProps {
  type: TypeProps;
}

export default function TypeBadge({ type = "movie" }: TypeBadgeProps) {
  const className = `badge ${type}`;

  return <span className={className}>{type}</span>;
}
