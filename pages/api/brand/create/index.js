import Brand from "@/models/brand";
import connectMongo from "../../../../utils/connectDB";

connectMongo();

export default async (req, res) => {
  switch(req.method){
    case "POST":
      await createBrand(req, res)
      break;
  }
}

const createBrand = async(req, res) => {
  try {
    const newBrand = await Brand.create(req.body)
    res.status(201).json(newBrand)
  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  },
};