const express = require("express");

const router = express.Router();

const {

    createInventory,
    getAllInventory,
    getSingleInventory,
    updateInventory,
    deleteInventory

} = require("../../controllers/inventoryController/inventoryController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createInventory);

router.get("/", authorize("admin", "staff"), getAllInventory);

router.get("/:id", authorize("admin", "staff"), getSingleInventory);

router.put("/:id", authorize("admin"), updateInventory);

router.delete("/:id", authorize("admin"), deleteInventory);

module.exports = router;