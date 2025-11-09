import express from "express";
import {
  getProducts,
  updateProduct,
  postProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

app.post("/", postProduct);

app.put("/:id", updateProduct);

app.delete("/:id", deleteProduct);

app.get("/", getProducts);

export default router;
