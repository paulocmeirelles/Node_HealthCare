import withdrawService from "../services/withdraw.service.js";
import withdrawValidation from "../validations/withdraw.validation.js";

async function rescueBalance(req, res, next) {
  try {
    const data = req.body;
    if (!withdrawValidation.schemaValidationGet(data)) {
      return res.status(422).json({ message: "Missing variables" });
    }
    res.send(await withdrawService.withdrawValue(data));
  } catch (err) {
    next(err);
  }
}

export default {
  rescueBalance,
};
