const express = require("express");

const router = express.Router();

const {

    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer

} = require("../../controllers/customerController/customerController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createCustomer);

router.get("/", authorize("admin", "staff"), getAllCustomer);

router.get("/:id", authorize("admin", "staff"), getSingleCustomer);

router.put("/:id", authorize("admin"), updateCustomer);

router.delete("/:id", authorize("admin"), deleteCustomer);

module.exports = router;