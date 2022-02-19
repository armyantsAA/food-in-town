import React from "react";

function Nav({ title }) {
  return (
    <div className="nav">
      <span className="material-icons">menu</span>
      <h1 className="logo">{title || "Food in Town"}</h1>
      <span className="material-icons">search</span>
    </div>
  );
}

export default Nav;
