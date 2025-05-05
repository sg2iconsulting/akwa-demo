import React from "react";

interface Row {
  cols: string[];
}

interface PriceTableProps {
  headers: string[];
  rows: Row[];
  headerClassName?: string;
  rowClassName?: string;
  containerClassName?: string;
  tableClassName?: string;
}

const PriceTable: React.FC<PriceTableProps> = ({
  headers,
  rows,
  headerClassName = "bg-[#a5c33c] text-white font-bold py-4 px-6",
  rowClassName = "border-b border-gray-200 py-4 px-6",
  containerClassName = "overflow-x-auto w-full",
  tableClassName = "min-w-full bg-white rounded-lg shadow-md overflow-hidden"
}) => {
  return (
    <div className={containerClassName}>
      <table className={tableClassName}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={headerClassName}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.cols.map((col, colIndex) => (
                <td key={colIndex} className={rowClassName}>
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable; 