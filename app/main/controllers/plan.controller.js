import planService from "../services/plan.service.js";
import planValidation from "../validations/plan.validation.js";

async function createPlan(req, res, next) {
  try {
    const data = req.body;
    if (!planValidation.createPlanValidation(data)) {
      return res.status(400).json({ message: "Missing variables" });
    }
    res.send({ id: (await planService.createPlan(data)).id });
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
    let data = req.body;
    if (!data.id) {
      return res.status(400).json({ message: "id is missing" });
    }
    data = await planValidation.schemaValidationUpdate(data);
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
