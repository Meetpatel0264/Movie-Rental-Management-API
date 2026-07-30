const express = require("express");

const router = express.Router();

const {

    createStore,
    getAllStore,
    getSingleStore,
    updateStore,
    deleteStore

} = require("../../controllers/storeController/storeController");

router.post("/", createStore);

router.get("/", getAllStore);

router.get("/:id", getSingleStore);

router.put("/:id", updateStore);

router.delete("/:id", deleteStore);

module.exports = router;