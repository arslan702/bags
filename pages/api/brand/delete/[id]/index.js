import Brand from "@/models/brand";
import connectMongo from "../../../../../utils/connectDB";

connectMongo();

export default async (req, res) => {
  switch(req.method){
    case "DELETE":
      await deleteBrand(req, res)
      break;
  }
}

const deleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndRemove(req.query.id);
    res.status(201).json({
      success: true,
      message: "brand deleted"
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      error
    })
  }
};