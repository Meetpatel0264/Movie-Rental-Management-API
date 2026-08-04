const express = require("express");

const router = express.Router();

const {

    createCountry,
    getAllCountry,
    getSingleCountry,
    updateCountry,
    deleteCountry

} = require("../../controllers/countryController/countryController");

const { protect, authorize } = require('../../Middleware/authMiddleware');

router.post("/", authorize("admin"), createCountry);

router.get("/", authorize("admin", "staff"), getAllCountry);

router.get("/:id", authorize("admin", "staff"), getSingleCountry);

router.put("/:id", authorize("admin"), updateCountry);

router.delete("/:id", authorize("admin"), deleteCountry);

module.exports = router;