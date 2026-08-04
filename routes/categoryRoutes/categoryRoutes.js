const express = require("express");

const router = express.Router();

const {

    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory

} = require("../../controllers/categoryController/categoryController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createCategory);

router.get("/", authorize("admin", "staff"), getAllCategory);

router.get("/:id", authorize("admin", "staff"), getSingleCategory);

router.put("/:id", authorize("admin"), updateCategory);

router.delete("/:id", authorize("admin"), deleteCategory);

module.exports = router;