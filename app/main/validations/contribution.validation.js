import planRepository from "../../api/v1/repositories/plan.repository";

function createContributionValidation(data) {
  if (!data.idCliente || !data.idPlano || !data.valorAporte) {
    return false;
  } else {
    return true;
  }
}

async function businessValidationToCreate(id, aporte) {
  const plan = await planRepository.getPlan(id);
  if (plan.aporte >= aporte) {
    return true;
  } else {
    return false;
  }
}

export default {
  createContributionValidation,
  businessValidationToCreate,
};
