import express from "express";
import selecaoController from "../controllers/selecao-controller.js";

const router = express.Router();

router.get("/", selecaoController.index);
router.get("/:id", selecaoController.show);
router.post("/", selecaoController.store);
router.put("/:id", selecaoController.update);
router.delete("/:id", selecaoController.delete);

export default router;
