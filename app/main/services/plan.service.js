import planRepository from "../../api/v1/repositories/plan.repository.js";

async function createPlan(data) {
  const plan = await getPlanByClientProduct(data);
  if (plan.length > 0) {
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
  const client = await planRepository.getPlan(id);
  if (client.aporte > 0) {
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
