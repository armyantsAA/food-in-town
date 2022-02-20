import React from "react";
import Link from "next/link";
import Nav from "../../../components/Nav";
import Restaurant from "../../../components/Restaurant";
import { useRouter } from "next/router";
import { useCollectionQuery } from '../../../hooks/useCollectionQuery'
// import restaurants from "../../utils/data";

function Restaurants() {
  const router = useRouter();
  const { cuisine } = router.query
  const { documents, isPending, error } = useCollectionQuery("restaurants", cuisine)

  return (
    <>
      {error && console.log(error)}
      {isPending && <p>Loading data...</p>}
      {documents && (
        <>
          <Nav title="Food in Town" />
          <h1 style={{ marginTop: 60 }}>{cuisine}</h1>
          {documents.length !== 0 && documents.map((restaurant, index) => (
            <Link href={`/restaurants/${restaurant.id}`} key={index}>
              <a>
                <Restaurant
                  name={restaurant.name}
                  image={restaurant.photoURL}
                  cuisine={restaurant.cuisine}
                  avgPrice={restaurant.avgPrice}
                  address={restaurant.address}
                />
              </a>
            </Link>
          ))}
          {documents.length === 0 && <h2>No restaurant found</h2>}
        </>
      )}
    </>
  );
}

export default Restaurants;

// export async function getServerSideProps(context) {
//   const cuisine = context.query.cuisine;
//   let filteredRestaurants = restaurants.filter(
//     (restaurant) => restaurant.cuisine == cuisine
//   );
//   if (filteredRestaurants.length == 0) {
//     if (cuisine == "All Restaurants") {
//       filteredRestaurants = restaurants;
//     }
//   }
//   return {
//     props: {
//       filteredrestaurants: filteredRestaurants,
//       cuisine,
//     },
//   };
// }
