const express = require("express");

const router = express.Router();

const {

    createInventory,
    getAllInventory,
    getSingleInventory,
    updateInventory,
    deleteInventory

} = require("../../controllers/inventoryController/inventoryController");

router.post("/", createInventory);

router.get("/", getAllInventory);

router.get("/:id", getSingleInventory);

router.put("/:id", updateInventory);

router.delete("/:id", deleteInventory);

module.exports = router;