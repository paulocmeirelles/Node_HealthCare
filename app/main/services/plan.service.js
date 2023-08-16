import planRepository from "../../api/v1/repositories/plan.repository.js";
import planValidation from "../validations/plan.validation.js";
import contributionRepository from "../../api/v1/repositories/contribution.repository.js";
import planHelper from "../helpers/plan.helper.js";

async function createPlan(data) {
  if (!planValidation.businessValidationCreate(data)) {
    return { status: 400, message: "Plan alredy exist" };
  } else {
    const plan = await planRepository.createPlan(data);
    const contribution = planHelper.createContribution(plan);
    await contributionRepository.createContribution(contribution);
    return plan;
  }
}

async function getPlans() {
  return await planRepository.getPlans();
}

async function getPlan(id) {
  return await planRepository.getPlan(id);
}

async function deletePlan(id) {
  if (!planValidation.businessValidationDelete(id)) {
    return { status: 400, message: "Plan has funds" };
  } else {
    return await planRepository.deletePlan(id);
  }
}

async function updatePlan(data) {
  return await planRepository.updatePlan(data);
}

export default {
  createPlan,
  getPlans,
  getPlan,
  deletePlan,
  updatePlan,
};
