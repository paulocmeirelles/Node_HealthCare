import contributionRepository from "../../api/v1/repositories/contribution.repository.js";
import withdrawValidation from "../validations/withdraw.validation.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";

async function withdrawValue(data) {
  const response = await withdrawValidation.businessValidationWithdraw(data);
  if (!response.condition) {
    return { status: 400, message: response.reason };
  } else {
    const plan = await planRepository.getPlan(data.idPlano);
    data.idCliente = plan.idCliente;
    data.valorAporte = -parseFloat(data.valorResgate);
    return await contributionRepository.createContribution(data);
  }
}

async function extractAccount(id) {
  return await contributionRepository.getBalance(id);
}

export default {
  withdrawValue,
  extractAccount,
};
