const express = require("express");

const router = express.Router();

const {

    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory

} = require("../../controllers/categoryController/categoryController");

router.post("/", createCategory);

router.get("/", getAllCategory);

router.get("/:id", getSingleCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;