import { Router } from "express";
import countries from "./crountries/index.js";

const router = Router();

router.use("/country", countries);

export default router;
