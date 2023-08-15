import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

import clientController from "../main/controllers/client.controller.js";

router.post("/", bodyParser.json(), clientController.createClient);
router.get("/", clientController.getClients);
router.get("/:id", clientController.getClient);
router.delete("/:id", clientController.deleteClient);
router.put("/", bodyParser.json(), clientController.updateClient);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;
