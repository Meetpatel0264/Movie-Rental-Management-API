const express = require("express");

const router = express.Router();

const {

    createCountry,
    getAllCountry,
    getSingleCountry,
    updateCountry,
    deleteCountry

} = require("../../controllers/countryController/countryController");

router.post("/", createCountry);

router.get("/", getAllCountry);

router.get("/:id", getSingleCountry);

router.put("/:id", updateCountry);

router.delete("/:id", deleteCountry);

module.exports = router;