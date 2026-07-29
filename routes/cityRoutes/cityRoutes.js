const express = require("express");

const router = express.Router();

const {

    createCity,
    getAllCity,
    getSingleCity,
    updateCity,
    deleteCity

} = require("../../controllers/cityController/cityController");

router.post("/", createCity);

router.get("/", getAllCity);

router.get("/:id", getSingleCity);

router.put("/:id", updateCity);

router.delete("/:id", deleteCity);

module.exports = router;