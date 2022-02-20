import React from "react";

function FloatingBtn({ onClick }) {
  return (
    <button className="floating-btn" onClick={onClick}>
      +
    </button>
  );
}

export default FloatingBtn;
