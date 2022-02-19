import Link from "next/link";

function Cuisine({ name, image }) {
  return (
    <Link href={`/restaurants?cuisine=${name}`}>
      <div className="cuisine">
        <div className="cuisine-img">
          <img src={image} alt={name} />
        </div>
        <p>{name || "Name"}</p>
      </div>
    </Link>
  );
}

export default Cuisine;
