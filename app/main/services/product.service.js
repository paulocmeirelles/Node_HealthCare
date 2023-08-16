import productRepository from "../../api/v1/repositories/product.repository.js";
import productValidation from "../validations/product.validation.js";

async function createProduct(data) {
  if (!productValidation.businessValidationCreate(data.nome)) {
    return { status: 400, message: "Product alredy exist" };
  } else {
    return await productRepository.createProduct(data);
  }
}

async function getProducts() {
  return await productRepository.getProducts();
}

async function getProduct(id) {
  return await productRepository.getProduct(id);
}

async function getProductByName(nome) {
  return await productRepository.getProductByName(nome);
}

async function deleteProduct(id) {
  if (!productValidation.businessValidationDelete(id)) {
    return { status: 400, message: "Product has plans activated" };
  } else {
    return await productRepository.deleteProduct(id);
  }
}

async function updateProduct(data) {
  return await productRepository.updateProduct(data);
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductByName,
};
