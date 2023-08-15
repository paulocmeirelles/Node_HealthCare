import planRepository from "../../api/v1/repositories/plan.repository.js";
import productRepository from "../../api/v1/repositories/product.repository.js";
import clientRepository from "../../api/v1/repositories/client.repository.js";
import planHelper from "../helpers/plan.helper.js";

function createPlanValidation(data) {
  if (
    !data.idCliente ||
    !data.idProduto ||
    !data.aporte ||
    !data.idadeDeAposentadoria
  ) {
    return false;
  } else {
    return true;
  }
}

async function businessValidationDelete(id) {
  const plan = await planRepository.getPlan(id);
  if (plan.aporte > 0) {
    return false;
  } else {
    return true;
  }
}

async function businessValidationCreate(data) {
  const plan = await planRepository.getPlanByClientProduct(data);
  const product = await productRepository.getProduct(data.idProduto);
  const client = await clientRepository.getClient(data.idCliente);

  if (
    plan.aporte > 0 ||
    new Date() > new Date(product.expiracaoDeVenda) ||
    product.valorMinimoAporteInicial <= data.aporte ||
    planHelper.getAge(client.dataDeNascimento) >= product.idadeDeEntrada ||
    planHelper.getAge(client.dataDeNascimento) < product.idadeDeSaida
  ) {
    return false;
  } else {
    return true;
  }
}

async function schemaValidationUpdate(data) {
  const plan = await planRepository.getPlan(data.id);
  data.aporte ? data.aporte : (data.aporte = plan.aporte);
  data.idadeDeAposentadoria
    ? data.idadeDeAposentadoria
    : (data.idadeDeAposentadoria = plan.idadeDeAposentadoria);
  return data;
}

export default {
  createPlanValidation,
  schemaValidationUpdate,
  businessValidationDelete,
  businessValidationCreate,
};
