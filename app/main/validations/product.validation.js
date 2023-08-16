import productRepository from "../../api/v1/repositories/product.repository.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";

function createProductValidation(data) {
  if (
    !data.nome ||
    !data.susep ||
    !data.expiracaoDeVenda ||
    !data.valorMinimoAporteInicial ||
    !data.valorMinimoAporteExtra ||
    !data.idadeDeEntrada ||
    !data.idadeDeSaida ||
    !data.carenciaInicialDeResgate ||
    !data.carenciaEntreResgates
  ) {
    return false;
  } else {
    return true;
  }
}

function updateProductValidation(data) {
  if (
    !data.id ||
    !data.nome ||
    !data.susep ||
    !data.expiracaoDeVenda ||
    !data.valorMinimoAporteInicial ||
    !data.valorMinimoAporteExtra ||
    !data.idadeDeEntrada ||
    !data.idadeDeSaida ||
    !data.carenciaInicialDeResgate ||
    !data.carenciaEntreResgates
  ) {
    return false;
  } else {
    return true;
  }
}

async function schemaValidationUpdate(data) {
  const product = await productRepository.getProduct(data.id);
  data.susep ? data.susep : (data.susep = product.susep);
  data.expiracaoDeVenda
    ? data.expiracaoDeVenda
    : (data.expiracaoDeVenda = product.expiracaoDeVenda);
  data.valorMinimoAporteInicial
    ? data.valorMinimoAporteInicial
    : (data.valorMinimoAporteInicial = product.valorMinimoAporteInicial);
  data.valorMinimoAporteExtra
    ? data.valorMinimoAporteExtra
    : (data.valorMinimoAporteExtra = product.valorMinimoAporteExtra);
  data.idadeDeEntrada
    ? data.idadeDeEntrada
    : (data.idadeDeEntrada = product.idadeDeEntrada);
  data.idadeDeSaida
    ? data.idadeDeSaida
    : (data.idadeDeSaida = product.idadeDeSaida);
  data.carenciaInicialDeResgate
    ? data.carenciaInicialDeResgate
    : (data.carenciaInicialDeResgate = product.carenciaInicialDeResgate);
  data.carenciaEntreResgates
    ? data.carenciaEntreResgates
    : (data.carenciaEntreResgates = product.carenciaEntreResgates);
  data.active ? data.active : (data.active = product.active);
  return data;
}

async function businessValidationCreate(nome) {
  const product = await productRepository.getProductByName(nome);
  if (product) {
    return product.length > 0 ? false : true;
  } else {
    return true;
  }
}

async function businessValidationDelete(id) {
  const plan = await planRepository.getPlanByIdProduct(id);
  if (plan) {
    return plan.length > 0 ? false : true;
  } else {
    return true;
  }
}

export default {
  createProductValidation,
  updateProductValidation,
  schemaValidationUpdate,
  businessValidationCreate,
  businessValidationDelete,
};
