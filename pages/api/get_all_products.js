import Product from "../../models/Product";
import db from "../../lib/connectDB";

export default async function handler(req, res) {
  try {
    let products = await Product.find({});
    res.json(products);
    res.status(200).send({ data: products });
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: e.message });
  }
}
