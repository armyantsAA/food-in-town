import React, { useState } from "react";
import Link from "next/link";
import FloatingBtn from "../../components/admin/FloatingBtn";
import Nav from "../../components/Nav";
import Restaurant from "../../components/Restaurant";
import restaurants from "../../utils/data.json";

function home() {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <div className="admin-page">
      <Nav title="Admin Page" />
      <h1 style={{ marginTop: 60 }}>All Restaurant</h1>

      {restaurants ? (
        restaurants.map((restaurant, index) => (
          <Link href={`/admin/${restaurant.slug}`} key={index}>
            <a>
              <Restaurant
                name={restaurant.name}
                image={restaurant.image}
                cuisine={restaurant.cuisine}
                avgPrice={restaurant.avgPrice}
                address={restaurant.address}
              />
            </a>
          </Link>
        ))
      ) : (
        <h2>No Restaurants found</h2>
      )}
      {/* Modal form for add restaurant */}
      {isOpened && (
        <div className="add-form">
          <h1>Add Restaurant Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
            <label htmlFor="image">Image</label>
            <input id="image" name="image" type="file" disabled />
            <label htmlFor="cuisine">Cuisine</label>
            <input id="cuisine" name="cuisine" type="text" />
            <label htmlFor="avgPrice">Average Price</label>
            <input id="avgPrice" name="avgPrice" type="text" />
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text" />
            <label htmlFor="phone">Phone No.</label>
            <input id="phone" name="phone" type="text" />
            {/* <div className="add-item">
            <label htmlFor="item-name">Item Name</label>
            <input id="item-name" name="item-name" type="text" />
            <label htmlFor="item-price">Item Price</label>
            <input id="item-price" name="item-price" type="text" />
            <label htmlFor="item-image">Item Image</label>
            <input id="item-image" name="item-image" type="file" disabled />
          </div> */}
            <button type="submit">Add Restaurant</button>
          </form>
        </div>
      )}
      <FloatingBtn onClick={handleClick} />
    </div>
  );
}

export default home;
