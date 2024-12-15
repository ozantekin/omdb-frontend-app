interface TableStateProps {
  message: string;
  colSpan: number;
  className?: string;
}

export default function TableState({
  message,
  colSpan,
  className,
}: TableStateProps) {
  return (
    <tr>
      <td colSpan={colSpan} className={`table-state ${className}`}>
        <p>{message}</p>
      </td>
    </tr>
  );
}
