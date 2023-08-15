import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

import contributionController from "../main/controllers/contribution.controller.js";

router.post("/", bodyParser.json(), contributionController.createContribution);
router.get("/", contributionController.getContributions);
router.get("/:id", contributionController.getContribution);
router.delete("/:id", contributionController.deleteContribution);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;
