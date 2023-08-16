import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

import withdrawController from "../main/controllers/withdraw.controller.js";

router.post("/", bodyParser.json(), withdrawController.rescueBalance);
router.get("/:id", withdrawController.extractAccount);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;
