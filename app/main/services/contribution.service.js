import contributionRepository from "../../api/v1/repositories/contribution.repository.js";

async function createContribution(data) {
  return await contributionRepository.createContribution(data);
}

async function getContributions() {
  return await contributionRepository.getContributions();
}

async function getContribution(id) {
  return await contributionRepository.getContribution(id);
}

async function deleteContribution(id) {
  return await contributionRepository.deleteContribution(id);
}

export default {
  createContribution,
  getContributions,
  getContribution,
  deleteContribution,
};
