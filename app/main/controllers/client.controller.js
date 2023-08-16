import clientService from "../services/client.service.js";
import clientValidation from "../validations/client.validation.js";

async function createClient(req, res, next) {
  try {
    const data = req.body;
    if (!clientValidation.createClientValidation(data)) {
      return res.status(400).json({ message: "Missing variables" });
    }
    res.send({ id: (await clientService.createClient(data)).id });
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await clientService.getClients());
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await clientService.getClient(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    res.send({
      message: await clientService.deleteClient(req.params.id),
    });
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let data = req.body;
    if (!data.cpf) {
      return res.status(400).json({ message: "cpf is missing" });
    }
    data = await clientValidation.schemaValidationUpdate(data);
    res.send(await clientService.updateClient(data));
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClient,
  getClients,
  deleteClient,
  updateClient,
};
