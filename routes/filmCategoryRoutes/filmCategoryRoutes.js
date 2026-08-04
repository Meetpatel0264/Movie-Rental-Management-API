const express = require("express");

const router = express.Router();

const {

    createFilmCategory,
    getAllFilmCategory,
    getSingleFilmCategory,
    updateFilmCategory,
    deleteFilmCategory

} = require("../../controllers/filmCategoryController/filmCategoryController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createFilmCategory);

router.get("/", authorize("admin", "staff"), getAllFilmCategory);

router.get("/:id", authorize("admin", "staff"), getSingleFilmCategory);

router.put("/:id", authorize("admin"), updateFilmCategory);

router.delete("/:id", authorize("admin"), deleteFilmCategory);

module.exports = router;