import react, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingBtn from "../../components/admin/FloatingBtn";
import restaurants from "../../utils/data";

function Restaurant({ restaurant }) {
  const router = useRouter();
  const [slug, setSlug] = useState(router.query.slug);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    // add Item
    setIsOpened(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <div className="add-form add-item-form">
        <h1>Add Item Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="item-name">Item Name</label>
          <input id="item-name" name="item-name" type="text" required />
          <label htmlFor="item-price">Item Price</label>
          <input id="item-price" name="item-price" type="text" required />
          <label htmlFor="item-image">Item Image</label>
          <input id="item-image" name="item-image" type="file" disabled />
          <button type="submit">Add Item</button>
        </form>
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
