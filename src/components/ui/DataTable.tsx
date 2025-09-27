import React from "react";

interface DataTableProps<T extends object> {
  rows: T[];
  hiddenKeys?: string[];
  columnOrder?: string[];
  formatValue?: (key: string, value: any) => React.ReactNode;
  emptyMessage?: string;
}

// Utility: format headers (snake_case → Proper Case)
const formatHeader = (key: string) => {
  return key
    .replace(/_/g, " ") // underscores → spaces
    .replace(
      /\w\S*/g,
      (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    ); // proper case
};

const DataTable = <T extends object>({
  rows,
  hiddenKeys = [],
  columnOrder,
  formatValue,
  emptyMessage = "No data available",
}: DataTableProps<T>) => {
  if (rows.length === 0) return <p>{emptyMessage}</p>;

  const GLOBAL_HIDDEN_KEYS = ["user_id"]; // always hidden

  let headers = Object.keys(rows[0]).filter(
    (key) => ![...hiddenKeys, ...GLOBAL_HIDDEN_KEYS].includes(key)
  );

  if (columnOrder && columnOrder.length > 0) {
    headers = [
      ...columnOrder,
      ...headers.filter((h) => !columnOrder.includes(h)),
    ];
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((key) => (
              <th
                key={key}
                className="px-4 py-2 text-left text-sm font-medium text-gray-700"
              >
                {formatHeader(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {headers.map((key) => (
                <td
                  key={String(key)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >
                  {formatValue
                    ? formatValue(key, row[key as keyof T])
                    : typeof row[key as keyof T] === "boolean"
                    ? row[key as keyof T]
                      ? "Yes"
                      : "No"
                    : row[key as keyof T] != null
                    ? String(row[key as keyof T])
                    : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
