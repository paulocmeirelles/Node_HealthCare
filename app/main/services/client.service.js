import clientRepository from "../../api/v1/repositories/client.repository.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";

async function createClient(data) {
  const client = await getClientByCPF(data.cpf);
  if (client.length > 0) {
    return { status: 422, message: "Client already exist!" };
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

async function getClientByName(name) {
  return await clientRepository.getClientByName(name);
}

async function deleteClient(id) {
  const plans = await planRepository.getPlanByIdClient(id);
  if (plans.length > 0) {
    return { status: 422, message: "Client own active plans" };
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
  getClientByName,
};
