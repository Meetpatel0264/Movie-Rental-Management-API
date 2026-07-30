const express = require("express");

const router = express.Router();

const {

    createStaff,
    getAllStaff,
    getSingleStaff,
    updateStaff,
    deleteStaff

} = require("../../controllers/staffController/staffController");

router.post("/", createStaff);
router.get("/", getAllStaff);
router.get("/:id", getSingleStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

module.exports = router;