import React from "react";

function Restaurant({ isSmall, name, avgPrice, cuisine, image, address }) {
  return (
    <div className={isSmall ? "restaurant small" : "restaurant"}>
      <div className="restaurant-img">
        <img src={image} alt={name} height={50} width={80} />
      </div>
      <h3>{name || "Restaurant Name"}</h3>
      <p>
        <span>{avgPrice || "$"} - </span>
        {cuisine || ""}
      </p>
      <p>{address || "Somewhere on earth"}</p>
    </div>
  );
}

export default Restaurant;
