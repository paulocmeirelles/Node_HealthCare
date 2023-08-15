import planRepository from "../../api/v1/repositories/plan.repository.js";
import planValidation from "../validations/plan.validation.js";

async function createPlan(data) {
  if (!planValidation.businessValidationCreate(data)) {
    return { status: 422, message: "Plan alredy exist" };
  } else {
    return await planRepository.createPlan(data);
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
    return { status: 422, message: "Plan has funds" };
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
