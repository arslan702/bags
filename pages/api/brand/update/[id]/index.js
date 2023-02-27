import Brand from "@/models/brand";
import connectMongo from "../../../../../utils/connectDB";

connectMongo();

export default async (req, res) => {
  switch(req.method){
    case "PATCH":
      await updateBrand(req, res)
      break;
  }
}

export const updateBrand = async(req, res) => {
  try {
    // const currentOrder = await Order.findById(req.query.id)
    const brandUpdate = await Brand.findByIdAndUpdate(req?.query?.id, req?.body, {new: true})
    res.status(200).json({
      success: true,
      brandUpdate
    })
  } catch (error) {
    res.status(404).json({
      error
    })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  },
};