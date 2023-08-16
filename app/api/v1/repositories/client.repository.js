import Client from "../../../main/models/client.model.js";

async function createClient(data) {
  try {
    return await Client.create(data);
  } catch (err) {
    throw err;
  }
}

async function createClients(json) {
  try {
    return await Client.bulkCreate(json);
  } catch (err) {
    throw err;
  }
}

async function getClients() {
  try {
    return await Client.findAll({
      where: { active: true },
    });
  } catch (err) {
    throw err;
  }
}

async function getClientByCPF(cpf) {
  try {
    return await Client.findOne({
      where: {
        cpf: cpf,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getClient(id) {
  try {
    return await Client.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteClient(cpf) {
  try {
    await Client.update(
      {
        active: false,
      },
      {
        where: {
          cpf: cpf,
        },
      }
    );
    return `Client ${cpf} was deactivated`;
  } catch (err) {
    throw err;
  }
}

async function updateClient(data) {
  try {
    await Client.update(
      {
        nome: data.nome,
        email: data.email,
        dataDeNascimento: data.dataDeNascimento,
        genero: data.genero,
        rendaMensal: data.rendaMensal,
      },
      {
        where: {
          cpf: data.cpf,
        },
      }
    );
    return await getClientByCPF(data.cpf);
  } catch (err) {
    throw err;
  }
}

export default {
  createClient,
  createClients,
  getClient,
  getClients,
  deleteClient,
  updateClient,
  getClientByCPF,
};
