import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableHeader from "./TableHeader";
import TableRaw from "./TableRaw";

export default function Table({ row_data = [], headers = [] }) {
  let navigate = useNavigate();

  const handleOnClickRaw = (rowid) => {
    navigate(`/user/${rowid}`);
  };

  return (
    <div className="table-responsive">
      <table class="table table-hover table-striped">
        <TableHeader table_headers={headers} />
        <tbody>
          {row_data.map((data, index) => {
            return (
              <TableRaw
                row={data}
                key={index}
                handleOnClickRaw={handleOnClickRaw}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
