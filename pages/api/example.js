import Product from "../../models/Product";
import db from '../../lib/connectDB';

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        let product = await Product.create(req.body)
        res.status(200).send({data:product})
      } catch (e) {
        console.error(e);
      }
      break;
    case "GET":
      let products = await Product.find({})
      res.json(products);
      break;
  }
}
