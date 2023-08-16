import Plan from "../../../main/models/plan.model.js";
import { Op } from "sequelize";

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
      where: { active: true },
    });
  } catch (err) {
    throw err;
  }
}

async function getPlan(id) {
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

async function getPlanByClientProduct(data) {
  try {
    return await Plan.findOne({
      where: {
        [Op.and]: [
          { idCliente: data.idCliente },
          { idProduto: data.idProduto },
        ],
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getPlanByIdProduct(id) {
  try {
    return await Plan.findOne({
      where: {
        idProduto: id,
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
        active: false,
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
    return await getPlan(data.id);
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
  getPlanByIdProduct,
  getPlan,
  getPlanByClientProduct,
  getPlanByIdClient,
};
