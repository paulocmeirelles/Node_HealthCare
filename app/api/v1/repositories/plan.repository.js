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
      where: { activate: true },
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
  getPlanByIdPlan,
  getPlanByIdProduct,
  getPlan,
  getPlanByClientProduct,
};
