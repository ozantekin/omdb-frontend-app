import TableState from "./table-state";

interface Column<T> {
  title: string;
  dataIndex: keyof T;
  render?: (value: T[keyof T], record: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  totalResults: number;
  onPageChange: (page: number) => void;
  currentPage: number;
  isLoading?: boolean;
  isError?: boolean;
}

export default function Table<T>({
  columns,
  data,
  totalResults,
  onPageChange,
  currentPage,
  isLoading,
  isError,
}: TableProps<T>) {
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {isLoading && (
            <TableState
              message="Loading..."
              colSpan={columns.length}
              className="table-state__loading"
            />
          )}

          {isError && (
            <TableState
              message="An error occurred"
              colSpan={columns.length}
              className="table-state__error"
            />
          )}

          {!isError && !isLoading && data.length === 0 && (
            <TableState
              message="No data found"
              colSpan={columns.length}
              className="table-state__noData"
            />
          )}

          {data.map((row, rowIndex) => (
            <tr className="table-row" key={rowIndex}>
              {columns.map((col, index) => {
                const cellData = row[col.dataIndex];

                return (
                  <td className="table-cell" key={index}>
                    {col.render
                      ? col.render(cellData, row)
                      : ((cellData || "-") as React.ReactNode)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="table-pagination__info">
          Page {currentPage} of {Math.ceil(totalResults / 10)}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={totalResults <= currentPage * 10}
        >
          Next
        </button>
      </div>
    </>
  );
}
