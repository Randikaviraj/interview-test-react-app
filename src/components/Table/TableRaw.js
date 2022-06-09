import React from "react";

function TableRaw({ row, handleOnClickRaw }) {
  return (
    <>
      <tr onClick={() => handleOnClickRaw(row.id)}>
        <th scope="row">{row.id}</th>
        <td className="d-flex ">
          <div className="d-flex align-items-center">
            <img
              width="60"
              src={row.avatar}
              className="img-thumbnail rounded-circle"
              alt="..."
            />
            <span className="ml-2">{row.first_name}</span>
          </div>
        </td>
        <td>{row.last_name}</td>
        <td>{row.email}</td>
      </tr>
    </>
  );
}

export default TableRaw;
