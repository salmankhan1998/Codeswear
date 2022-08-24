import Product from "../../models/Product";
import db from "../../lib/connectDB";

export default async function handler(req, res) {
  try {
    console.log("req body", req.body);
    let product = await Product.create(req.body);
    console.log("product", product);
    res.status(200).send({ data: product });
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: e.message });
  }
}
