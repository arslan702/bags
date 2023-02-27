import { Schema, models, model } from "mongoose";

const BrandSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Brand = models.Brand || model("Brand", BrandSchema);
export default Brand;