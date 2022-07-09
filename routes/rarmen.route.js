import express from "express";
import { getResult } from "../controllers/rarmen.controller.js";

export const rarmenRouter = express.Router();

rarmenRouter.post("/", (req, res) => getResult(req, res));