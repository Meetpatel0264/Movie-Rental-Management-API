const express = require("express");

const router = express.Router();

const {

    createFilm,
    getAllFilm,
    getSingleFilm,
    updateFilm,
    deleteFilm

} = require("../../controllers/filmController/filmController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createFilm);

router.get("/", authorize("admin", "staff"), getAllFilm);

router.get("/:id", authorize("admin", "staff"), getSingleFilm);

router.put("/:id", authorize("admin"), updateFilm);

router.delete("/:id", authorize("admin"), deleteFilm);

module.exports = router;