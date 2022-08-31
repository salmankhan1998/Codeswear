import Product from "../../models/Product";
import { connectDB }  from "../../lib/connectDB";

export default async function handler(req, res) {
  try {
    connectDB();    
    let product = await Product.create(req.body);
    res.status(200).send({ data: product });
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: e.message });
  }
}
