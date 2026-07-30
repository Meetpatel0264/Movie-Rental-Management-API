const express = require("express");

const router = express.Router();

const {

    createRental,
    getAllRental,
    getSingleRental,
    updateRental,
    deleteRental

} = require("../../controllers/rentalController/rentalController");

router.post("/", createRental);
router.get("/", getAllRental);
router.get("/:id", getSingleRental);
router.put("/:id", updateRental);
router.delete("/:id", deleteRental);

module.exports = router;