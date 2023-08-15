import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

import planController from "../main/controllers/plan.controller.js";

router.post("/", bodyParser.json(), planController.createPlan);
router.get("/", planController.getPlans);
router.get("/:id", planController.getPlan);
router.delete("/:id", planController.deletePlan);
router.put("/", bodyParser.json(), planController.updatePlan);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;
