import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

import productController from "../main/controllers/product.controller.js";

router.post("/", bodyParser.json(), productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/", bodyParser.json(), productController.updateProduct);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;
