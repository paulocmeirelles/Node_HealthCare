import productRepository from "../../api/v1/repositories/product.repository.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";

async function createProduct(data) {
  const product = await getProductByName(data.nome);
  if (product.length > 0) {
    return { status: 422, message: "Product alredy exist" };
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
  const plan = await planRepository.getPlanByIdProduct(id);
  if (plan.length > 0) {
    return { status: 422, message: "Product has plans activated" };
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
