import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Btn from "../components/Btn";
import Cuisine from "../components/Cuisine";
import Nav from "../components/Nav";
import Restaurant from "../components/Restaurant";
// import restaurants from "../utils/data";

// custom hook
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const router = useRouter();
  const { documents, isPending, error } = useCollection("restaurants")

  return (
    <>
      <Head>
        <title>Food in Town | Gyobingauk</title>
      </Head>
      <Nav />
      <div className="banner">
        <Btn
          name="All Restaurants"
          onClick={() =>
            router.push({
              pathname: "/restaurants",
              // query: { cuisine: "All Restaurants" },
            })
          }
        />
      </div>
      <hr />
      <h2>Your Restaurants</h2>
      <div className="restaurants">
        {error && console.log(error)}
        {isPending && <p>Loading</p>}
        {documents && documents.map((restaurant) => (
          <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            <a>
              <Restaurant
                isSmall={true}
                name={restaurant.name}
                image={restaurant.photoURL}
                cuisine={restaurant.cuisine}
                avgPrice={restaurant.avgPrice}
                address={restaurant.address}
              />
            </a>
          </Link>
        ))}

      </div>
      <h2>Cuisines</h2>
      <div className="cuisines">
        <Cuisine
          name="Asian"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuIibcjzv2J9MRWLmIpRyNFpBTzAtP3jPwg&usqp=CAU"
        />
        <Cuisine
          name="European"
          image="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXVyb3BlYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <Cuisine
          name="Korean"
          image="https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a29yZWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />
        <Cuisine
          name="Japanese"
          image="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <Cuisine
          name="Drinks"
          image="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvY2ElMjBjb2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <Cuisine
          name="Dessert"
          image="https://media.istockphoto.com/photos/piece-of-sachertorte-sachr-cake-on-white-plate-top-view-copy-space-picture-id1296474411?b=1&k=20&m=1296474411&s=170667a&w=0&h=KwzSC3hrY3ZE07GJ3P08E5WZO72eHqqe7XKxUmX8Pk4="
        />
        <Cuisine
          name="Pizza"
          image="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        />
        <Cuisine
          name="Mohinga"
          image="https://media.istockphoto.com/photos/mohinga-at-dark-background-picture-id1166545899?b=1&k=20&m=1166545899&s=170667a&w=0&h=XvccNkqGp_3Ne8Ti37MHuNH7LJBj1TuDPW5yrUyDdtA="
        />
      </div>
      <div className="footer-space" />
    </>
  );
}
