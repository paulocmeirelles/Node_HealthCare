import Plan from "../../../main/models/plan.model.js";

async function createPlan(data) {
  try {
    return await Plan.create(data);
  } catch (err) {
    throw err;
  }
}

async function createPlans(json) {
  try {
    return await Plan.bulkCreate(json);
  } catch (err) {
    throw err;
  }
}

async function getPlans() {
  try {
    return await Plan.findAll({
      where: { activate: true },
    });
  } catch (err) {
    throw err;
  }
}

async function getPlanById(id) {
  try {
    return await Plan.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getPlanByIdClient(id) {
  try {
    return await Plan.findOne({
      where: {
        idCliente: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getPlanByIdPlan(id) {
  try {
    return await Plan.findOne({
      where: {
        idPlan: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function deletePlan(id) {
  try {
    await Plan.update(
      {
        activate: false,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return `Plan ${id} was deactivated`;
  } catch (err) {
    throw err;
  }
}

async function updatePlan(data) {
  try {
    await Plan.update(
      {
        aporte: data.aporte,
      },
      {
        where: {
          id: data.id,
        },
      }
    );
    return await getPlanByCPF(data.cpf);
  } catch (err) {
    throw err;
  }
}

export default {
  createPlan,
  createPlans,
  getPlans,
  deletePlan,
  updatePlan,
  getPlanByIdPlan,
  getPlanByIdClient,
  getPlanById,
};
