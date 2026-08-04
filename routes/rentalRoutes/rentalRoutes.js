const express = require("express");

const router = express.Router();

const {

    createRental,
    getAllRental,
    getSingleRental,
    updateRental,
    deleteRental

} = require("../../controllers/rentalController/rentalController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createRental);
router.get("/", authorize("admin", "staff"), getAllRental);
router.get("/:id", authorize("admin", "staff"), getSingleRental);
router.put("/:id", authorize("admin"), updateRental);
router.delete("/:id", authorize("admin"), deleteRental);

module.exports = router;