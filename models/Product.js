import mongoose from 'mongoose';

let ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: String, required: true },
    availableQty: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {}
const Product = mongoose.model('products', ProductSchema);
export default Product;
