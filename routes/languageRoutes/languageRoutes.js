const express = require("express");

const router = express.Router();

const {
    createLanguage,
    getAllLanguage,
    getSingleLanguage,
    updateLanguage,
    deleteLanguage
} = require("../../controllers/languageController/languageController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createLanguage);

router.get("/", authorize("admin", "staff"), getAllLanguage);

router.get("/:id", authorize("admin", "staff"), getSingleLanguage);

router.put("/:id", authorize("admin"), updateLanguage);

router.delete("/:id", authorize("admin"), deleteLanguage);

module.exports = router;