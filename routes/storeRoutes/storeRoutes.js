const express = require("express");

const router = express.Router();

const {

    createStore,
    getAllStore,
    getSingleStore,
    updateStore,
    deleteStore

} = require("../../controllers/storeController/storeController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createStore);

router.get("/", authorize("admin", "staff"), getAllStore);

router.get("/:id", authorize("admin", "staff"), getSingleStore);

router.put("/:id", authorize("admin"), updateStore);

router.delete("/:id", authorize("admin"), deleteStore);

module.exports = router;