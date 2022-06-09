import React from "react";

export default function TableHeader({ table_headers = [] }) {
  return (
    <>
      <thead>
        <tr>
          {table_headers.map((header, index) => (
            <th key={index} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
