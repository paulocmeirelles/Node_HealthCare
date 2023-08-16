import clientRepository from "../../api/v1/repositories/client.repository.js";
import planRepository from "../../api/v1/repositories/plan.repository.js";

function createClientValidation(data) {
  if (
    !data.cpf ||
    !data.nome ||
    !data.nome ||
    !data.email ||
    !data.dataDeNascimento ||
    !data.genero ||
    !data.rendaMensal
  ) {
    return false;
  } else {
    return true;
  }
}

async function businessValidationToCreate(cpf) {
  const client = await clientRepository.getClientByCPF(cpf);
  if (client) {
    return client.length > 0 ? false : true;
  } else {
    return true;
  }
}

async function businessValidationDelete(id) {
  const plans = await planRepository.getPlanByIdClient(id);
  if (plans) {
    return plans.length > 0 ? false : true;
  } else {
    return true;
  }
}

async function schemaValidationUpdate(data) {
  const client = await clientRepository.getClientByCPF(data.cpf);
  data.nome ? data.nome : (data.nome = client.nome);
  data.email ? data.email : (data.email = client.email);
  data.genero ? data.genero : (data.genero = client.genero);
  data.rendaMensal ? data.rendaMensal : (data.rendaMensal = client.rendaMensal);
  return data;
}

export default {
  createClientValidation,
  businessValidationToCreate,
  businessValidationDelete,
  schemaValidationUpdate,
};
