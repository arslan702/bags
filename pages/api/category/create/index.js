import cloudinary from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_NAME } from "../../../../utils/keys.js";
import Category from "../../../../models/category";
import connectMongo from "../../../../utils/connectDB";

connectMongo();

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

export default async (req, res) => {
  switch(req.method){
    case "POST":
      await createCategory(req, res)
      break;
  }
}

const createCategory = async(req, res) => {
  // console.log(typeof req , {body:req.body})
  let img = [];

  if (typeof req.body.img === "string") {
    img.push(req.body.img);
  } else {
    img = req.body.img;
  }

  const imagesLinks = [];

  for (let i = 0; i < img.length; i++) {
    const result = await cloudinary.v2.uploader.upload(img[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.img = imagesLinks;
  try {
    const category = await Category.create(req.body)
    res.status(201).json(category)
  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb'
    }
  },
};