import React from "react";

function Btn({ name, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {name || "button"}
      <span className="material-icons">arrow_forward</span>
    </button>
  );
}

export default Btn;
