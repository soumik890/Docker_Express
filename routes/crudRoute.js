import express from "express";
import { create, read, update, remove } from "../controllers/crudController.js";

const router = express.Router();

router.post("/create", create);

router.get("/read", read);
router.put("/update/:id", update);
router.delete("/remove/:id", remove);

export default router;
