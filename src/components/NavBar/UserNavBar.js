import React from "react";

export default function UserNavBar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">User Management</a>
          <dev className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Export to Excel
            </button>
            <button class="btn btn-outline-success" type="submit">
              Add New User
            </button>
          </dev>
        </div>
      </nav>
    </>
  );
}
