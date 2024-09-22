import {
  ErrorHandler,
  SuccessHandler,
  getCountryInfo,
  fetchCountryFlag,
} from "../../utils/index.js";
export const getAllCountries = async (req, res) => {
  try {
    const countries = await fetch(`${process.env.COUNTRIES_API}`).then((res) =>
      res.json()
    );

    SuccessHandler(res, 200, "Countries fetched successfully", countries);
  } catch (error) {
    ErrorHandler(error, res);
  }
};

export const getCountry = async (req, res) => {
  try {
    const countryCode = req.params.countryCode;
    const country = await getCountryInfo(countryCode);

    SuccessHandler(res, 200, "Country fetched successfully", country);
  } catch (error) {
    ErrorHandler(error, res);
  }
};

export const getCountryFlag = async (req, res) => {
  try {
    const countryCode = req.params.countryCode;
    const { flag } = await fetchCountryFlag(countryCode);
    res.status(200).send(flag);
  } catch (error) {
    ErrorHandler(error, res);
  }
};
