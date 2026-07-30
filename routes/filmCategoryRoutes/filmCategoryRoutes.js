const express = require("express");

const router = express.Router();

const {

    createFilmCategory,
    getAllFilmCategory,
    getSingleFilmCategory,
    updateFilmCategory,
    deleteFilmCategory

} = require("../../controllers/filmCategoryController/filmCategoryController");

router.post("/", createFilmCategory);

router.get("/", getAllFilmCategory);

router.get("/:id", getSingleFilmCategory);

router.put("/:id", updateFilmCategory);

router.delete("/:id", deleteFilmCategory);

module.exports = router;