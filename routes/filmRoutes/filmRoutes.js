const express = require("express");

const router = express.Router();

const {

    createFilm,
    getAllFilm,
    getSingleFilm,
    updateFilm,
    deleteFilm

} = require("../../controllers/filmController/filmController");

router.post("/", createFilm);

router.get("/", getAllFilm);

router.get("/:id", getSingleFilm);

router.put("/:id", updateFilm);

router.delete("/:id", deleteFilm);

module.exports = router;