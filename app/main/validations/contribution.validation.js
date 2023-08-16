import planRepository from "../../api/v1/repositories/plan.repository.js";
import productRepository from "../../api/v1/repositories/product.repository.js";

function createContributionValidation(data) {
  if (!data.idCliente || !data.idPlano || !data.valorAporte) {
    return false;
  } else {
    return true;
  }
}

async function businessValidationToCreate(id, aporte) {
  const plan = await planRepository.getPlan(id);
  const product = await productRepository.getProduct(plan.idProduto);
  if (parseFloat(aporte) <= parseFloat(product.valorMinimoAporteExtra)) {
    return false;
  } else {
    return true;
  }
}

export default {
  createContributionValidation,
  businessValidationToCreate,
};
