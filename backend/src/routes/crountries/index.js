import { Router } from "express";
import {
  getAllCountries,
  getCountry,
  getCountryFlag,
} from "../../controllers/index.js";

const router = Router();

router
  .get("/", getAllCountries)
  .get("/:countryCode/flag", getCountryFlag)
  .get("/:countryCode", getCountry);

export default router;
