const express = require("express");

const router = express.Router();

const {

    createAddress,
    getAllAddress,
    getSingleAddress,
    updateAddress,
    deleteAddress

} = require("../../controllers/addressController/addressController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin",), createAddress);

router.get("/", authorize("admin", "staff"), getAllAddress);

router.get("/:id", authorize("admin", "staff"), getSingleAddress);

router.put("/:id", authorize("admin",), updateAddress);

router.delete("/:id", authorize("admin",), deleteAddress);

module.exports = router;