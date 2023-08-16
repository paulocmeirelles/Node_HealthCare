import contributionService from "../services/contribution.service.js";
import contributionValidation from "../validations/contribution.validation.js";

async function createContribution(req, res, next) {
  try {
    const data = req.body;
    if (!contributionValidation.createContributionValidation(data)) {
      return res.status(400).json({ message: "Missing variables" });
    }
    res.send({ id: (await contributionService.createContribution(data)).id });
  } catch (err) {
    next(err);
  }
}

async function getContributions(req, res, next) {
  try {
    res.send(await contributionService.getContributions());
  } catch (err) {
    next(err);
  }
}

async function getContribution(req, res, next) {
  try {
    res.send(await contributionService.getContribution(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteContribution(req, res, next) {
  try {
    res.send({
      message: await contributionService.deleteContribution(req.params.id),
    });
  } catch (err) {
    next(err);
  }
}

export default {
  createContribution,
  getContribution,
  getContributions,
  deleteContribution,
};
