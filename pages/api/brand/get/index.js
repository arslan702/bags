import Brand from "@/models/brand";
import connectMongo from "../../../../utils/connectDB";

connectMongo();

export default async (req, res) => {
  switch(req.method){
    case "GET":
      await getBrand(req, res)
      break;
  }
}

const getBrand = async(req, res) => {
  try {
    const brands = await Brand.find();
    res.status(201).json(brands);
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}