import contributionRepository from "../../api/v1/repositories/contribution.repository.js";
import contributionValidation from "../validations/contribution.validation.js";

async function createContribution(data) {
  if (
    !contributionValidation.businessValidationToCreate(
      data.idPlano,
      data.valorAporte
    )
  ) {
    return await contributionRepository.createContribution(data);
  } else {
    return { status: 400, message: "Values are not correct" };
  }
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
