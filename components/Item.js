import React from "react";

function Item({ name, price, image }) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${
          image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmMr52WC2SfDzg4BPuMlE203ZY6kBy77hlw&usqp=CAU"
        })`,
      }}
    >
      <h2 className="item-name">{name || "Food Name"}</h2>
      <p className="item-price">{price || "MMK --"}</p>
    </div>
  );
}

export default Item;
