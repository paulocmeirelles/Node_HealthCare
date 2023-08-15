import productService from "../services/product.service.js";
import productValidation from "../validations/product.validation.js";

async function createProduct(req, res, next) {
  try {
    const data = req.body;
    if (!productValidation.createProductValidation(data)) {
      return res.status(422).json({ message: "Missing variables" });
    }
    res.send(await productService.createProduct(data));
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await productService.getProducts());
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await productService.getProduct(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    res.send({
      message: await productService.deleteProduct(req.params.id),
    });
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let data = req.body;
    if (!data.id) {
      return res.status(422).json({ message: "id is missing" });
    }
    data = productValidation.schemaValidationUpdate(data);
    res.send(await productService.updateProduct(data));
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
