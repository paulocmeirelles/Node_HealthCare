import planService from "../services/plan.service.js";
import planValidation from "../validations/plan.validation.js";

async function createPlan(req, res, next) {
  try {
    const data = req.body;
    if (!planValidation.createPlanValidation(data)) {
      return res.status(422).json({ message: "Missing variables" });
    }
    res.send(await planService.createPlan(data));
  } catch (err) {
    next(err);
  }
}

async function getPlans(req, res, next) {
  try {
    res.send(await planService.getPlans());
  } catch (err) {
    next(err);
  }
}

async function getPlan(req, res, next) {
  try {
    res.send(await planService.getPlan(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deletePlan(req, res, next) {
  try {
    res.send({
      message: await planService.deletePlan(req.params.id),
    });
  } catch (err) {
    next(err);
  }
}

async function updatePlan(req, res, next) {
  try {
    const data = req.body;
    if (!data.cpf) {
      return res.status(422).json({ message: "cpf is missing" });
    }
    res.send(await planService.updatePlan(data));
  } catch (err) {
    next(err);
  }
}

export default {
  createPlan,
  getPlan,
  getPlans,
  deletePlan,
  updatePlan,
};
