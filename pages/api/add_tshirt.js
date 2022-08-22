import Product from "../../models/Product";
import db from "../../lib/connectDB";

export default async function handler(req, res) {
  try {
    let product = await Product.create(req.body);
    console.log("product", product);
    res.status(200).send({ data: product });
  } catch (e) {
    console.error(e);
  }
}
