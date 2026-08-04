const express = require("express");

const router = express.Router();

const {

    createStaff,
    getAllStaff,
    getSingleStaff,
    updateStaff,
    deleteStaff

} = require("../../controllers/staffController/staffController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createStaff);
router.get("/", authorize("admin", "staff"), getAllStaff);
router.get("/:id", authorize("admin", "staff"), getSingleStaff);
router.put("/:id", authorize("admin"), updateStaff);
router.delete("/:id", authorize("admin"), deleteStaff);

module.exports = router;