import react, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingBtn from "../../components/admin/FloatingBtn";
import restaurants from "../../utils/data";

function Restaurant({ restaurant }) {
  const router = useRouter();
  const [slug, setSlug] = useState(router.query.slug);

  const handleClick = () => {
    // add Item
  };

  return (
    <>
      <div className="detail-nav">
        <div className="back" onClick={() => router.back()}>
          <span className="material-icons">arrow_back</span>
        </div>
      </div>
      <div className="detail-img">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <p>{restaurant.phone}</p>
      <hr />
      <h2>Menu</h2>
      <div className="items">
        {restaurant.items.map((item, index) => (
          // <Item
          //   key={index}
          //   name={item.name}
          //   price={item.price}
          //   image={item.image}
          // />
          <div
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
            key={index}
          >
            <h2 className="item-name">{item.name || "Food Name"}</h2>
            <p className="item-price">{item.price || "MMK --"}</p>
          </div>
        ))}
      </div>
      <FloatingBtn onClick={handleClick} />
    </>
  );
}

export default Restaurant;

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const restaurant = restaurants.find((restaurant) => restaurant.slug == slug);
  return {
    props: {
      restaurant,
    },
  };
}
