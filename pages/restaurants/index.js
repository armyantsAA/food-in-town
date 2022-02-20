import React from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import Restaurant from "../../components/Restaurant";
import restaurants from "../../utils/data";

function Restaurants({ filteredrestaurants, cuisine }) {
  return (
    <>
      <Nav title="Food in Town" />
      <h1 style={{ marginTop: 60 }}>{cuisine}</h1>
      {filteredrestaurants ? (
        filteredrestaurants.map((restaurant, index) => (
          <Link href={`/restaurants/${restaurant.slug}`} key={index}>
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
    </>
  );
}

export default Restaurants;

export async function getServerSideProps(context) {
  const cuisine = context.query.cuisine;
  let filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.cuisine == cuisine
  );
  if (filteredRestaurants.length == 0) {
    if (cuisine == "All Restaurants") {
      filteredRestaurants = restaurants;
    }
  }
  return {
    props: {
      filteredrestaurants: filteredRestaurants,
      cuisine,
    },
  };
}
