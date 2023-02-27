import Brand from "@/models/brand";
import connectMongo from "../../../../../utils/connectDB";

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
    // console.log("params  ", req.query.id);
    const brand = await Brand.findById(req.query.id);

    res.status(200).json(brand);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}