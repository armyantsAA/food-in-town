import restaurants from "../../utils/data.json";
export default function handler(req, res) {
  if (req.method === "POST") {
    const restaurant = req.body;
    restaurants.push(restaurant);
    res.status(200).json(restaurants);
  }
}
