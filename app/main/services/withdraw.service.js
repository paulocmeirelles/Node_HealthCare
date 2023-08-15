import contributionRepository from "../../api/v1/repositories/contribution.repository.js";
import withdrawValidation from "../validations/withdraw.validation.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";

async function withdrawValue(data) {
  const response = await withdrawValidation.businessValidationWithdraw(data);
  if (!response.condition) {
    return { status: 422, message: response.reason };
  } else {
    const plan = await planRepository.getPlan(data.idPlano);
    data.idPlano = plan.idCliente;
    return await contributionRepository.createContribution(data);
  }
}
export default {
  withdrawValue,
};
