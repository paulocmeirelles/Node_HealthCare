import clientRepository from "../../api/v1/repositories/client.repository.js";
import clientValidation from "../validations/client.validation.js";

async function createClient(data) {
  if (!clientValidation.businessValidationToCreate(data.cpf)) {
    return { status: 400, message: "Client already exist!" };
  } else {
    return await clientRepository.createClient(data);
  }
}

async function getClients() {
  return await clientRepository.getClients();
}

async function getClient(id) {
  return await clientRepository.getClient(id);
}

async function deleteClient(id) {
  if (!clientValidation.businessValidationDelete(id)) {
    return { status: 400, message: "Client own active plans" };
  } else {
    return await clientRepository.deleteClient(id);
  }
}

async function updateClient(data) {
  return await clientRepository.updateClient(data);
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
