// import { Schema, models, model } from "mongoose";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    oldPrice: {
      type: String,
    },
    category: {
      // type: mongoose.Schema.ObjectId,
      type: String,
      // ref: "User",
    },
    sub: {
      type: String,
    },
    trending: {
      type: String,
      default: 'no',
    },
    hot: {
      type: String,
      default: 'no',
    },
    stock: {
      type: String,
    },
    img: [
      {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      }
    }
  ],
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;