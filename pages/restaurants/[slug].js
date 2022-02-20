import { useRouter } from "next/router";
// import restaurants from "../../utils/data";
import { useGetDoc } from '../../hooks/useGetDoc'

function Restaurant() {
  const router = useRouter();
  const { slug } = router.query
  const { document, isPending, error } = useGetDoc("restaurants", slug)

  return (
    <>
    {error && console.log(error)}
    {isPending && <p>Loading data...</p>}
    {document && ( 
      <>
        <div className="detail-nav">
          <div className="back" onClick={() => router.back()}>
            <span className="material-icons">arrow_back</span>
          </div>
        </div>
        <div className="detail-img">
          <img 
            referrerPolicy="no-referrer" 
            src={document.photoURL} 
            alt={document.name} 
          />
        </div>
        <h1>{document.name}</h1>
        <p>{document.address}</p>
        <p>{document.phone}</p>
        <hr />
        <h2>Menu</h2>
        <div className="items">
          {document.menu.map((item, index) => (
            // <Item
            //   key={index}
            //   name={item.name}
            //   price={item.price}
            //   image={item.image}
            // />
            <div
              className="item"
              // style={{ backgroundImage: `url(${item.photoURL})` }}
              key={index}
            >
              <img 
                style={{width: "100%", height: "100%", objectFit: "contain", backgroundColor: "white"}} 
                src={item.photoURL} 
                alt={item.name}
                referrerPolicy="no-referrer" 
              />
              <h2 className="item-name">{item.name || "Food Name"}</h2>
              <p className="item-price">{item.price || "MMK --"}</p>
            </div>
          ))}
        </div> 
      </> )}
    </>
  );
}

export default Restaurant;

// export async function getServerSideProps({ params }) {
//   const slug = params.slug;
//   const restaurant = restaurants.find((restaurant) => restaurant.slug == slug);
//   return {
//     props: {
//       restaurant,
//     },
//   };
// }
