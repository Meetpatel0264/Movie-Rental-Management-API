const express = require("express");

const router = express.Router();

const {

    createCity,
    getAllCity,
    getSingleCity,
    updateCity,
    deleteCity

} = require("../../controllers/cityController/cityController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createCity);

router.get("/", authorize("admin", "staff"), getAllCity);

router.get("/:id", authorize("admin", "staff"), getSingleCity);

router.put("/:id", authorize("admin"), updateCity);

router.delete("/:id", authorize("admin"), deleteCity);

module.exports = router;