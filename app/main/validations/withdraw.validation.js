import productRepository from "../../api/v1/repositories/product.repository.js";
import contributionRepository from "../../api/v1/repositories/contribution.repository.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";
import withdrawHelper from "../helpers/withdraw.helper.js";

function schemaValidationGet(data) {
  if (!data.idPlano || !data.valorResgate) {
    return false;
  } else {
    return true;
  }
}

async function businessValidationWithdraw(data) {
  const plan = await planRepository.getPlan(data.idPlano);
  if (!plan) {
    return { condition: false, reason: "This plan doesn't exist" };
  }
  const balance = await contributionRepository.getBalance(data.idPlano);
  if (balance.total < data.valorResgate) {
    return {
      condition: false,
      reason: "This plan doesn't have enough balance",
    };
  }
  const product = await productRepository.getProduct(plan.idProduto);
  if (
    product.carenciaInicialDeResgate >
    withdrawHelper.diffDate(plan.dataDaContratacao, new Date())
  ) {
    return {
      condition: false,
      reason: "Wait more days to withdraw the money",
    };
  }
  return { condition: true };
}

export default {
  schemaValidationGet,
  businessValidationWithdraw,
};
