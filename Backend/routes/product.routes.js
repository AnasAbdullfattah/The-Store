import express from "express";
import {
  getProducts,
  updateProduct,
  postProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", postProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts);

export default router;
