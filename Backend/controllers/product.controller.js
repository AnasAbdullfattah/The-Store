import Product from "./models/product.model.js";
import mongoose from "mongoose";

export const postProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please Provide all fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res.status(201).json({ success: true, message: "Done" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "chech the id again" });
  }
  try {
    const updatedProducts = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(200).json({ success: true, data: updatedProducts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "chech the id again" });
  }
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    return res.status(201).json({ success: true, message: "Done" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(201).json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ success: false, message: "server error" });
  }
};
