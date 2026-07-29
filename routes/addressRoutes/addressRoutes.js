const express = require("express");

const router = express.Router();

const {

    createAddress,
    getAllAddress,
    getSingleAddress,
    updateAddress,
    deleteAddress

} = require("../../controllers/addressController/addressController");

router.post("/", createAddress);

router.get("/", getAllAddress);

router.get("/:id", getSingleAddress);

router.put("/:id", updateAddress);

router.delete("/:id", deleteAddress);

module.exports = router;