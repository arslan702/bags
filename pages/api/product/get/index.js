import Product from "@/models/product";
import connectMongo from "../../../../utils/connectDB";

connectMongo();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    let products;
    const PAGE_SIZE = req.query.size || 8;
    const sorts = req.query.sorts;
    const page = parseInt(req.query.page || "1");
    const total = await Product.countDocuments({});
    let myArray = [];
    let search = "";
    req.query.search?.includes(":")
      ? (myArray = req.query.search.split(":"))
      : (myArray = new RegExp(req.query.search, "i"));
    // console.log("field----   ", req.query.field);
    if (req.query.field == "oldPrice") {
      products = await Product.find({ oldPrice: { $gt: 0 } }).limit(PAGE_SIZE);
    } else if (req.query.field == "category" && req.query.sub == "sub") {
      products = await Product.find({
        $and: [{ category: req.query.brand }, { sub: req.query.category }],
      })
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * (page - 1));
    } else if (req.query.search != undefined) {
      products = await Product.find({ [req.query.field]: myArray })
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * (page - 1))
        .sort({ updatedAt: sorts });
    } else {
      products = await Product.find()
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * (page - 1))
        .sort({ updatedAt: sorts });
    }
    res.status(201).json({
      totalProducts: total,
      pageSize: PAGE_SIZE,
      products,
    });
    // console.log(products);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
