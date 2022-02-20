import Link from "next/link";
import FloatingBtn from "../../components/admin/FloatingBtn";
import Nav from "../../components/Nav";
import Restaurant from "../../components/Restaurant";
import restaurants from "../../utils/data.json";

function home() {
  const handleClick = () => {
    // add Restaurant
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
      <FloatingBtn onClick={handleClick} />
    </div>
  );
}

export default home;
