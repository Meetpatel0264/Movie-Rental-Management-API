const express = require("express");

const router = express.Router();

const {
    createLanguage,
    getAllLanguage,
    getSingleLanguage,
    updateLanguage,
    deleteLanguage
} = require("../../controllers/languageController/languageController");

router.post("/", createLanguage);

router.get("/", getAllLanguage);

router.get("/:id", getSingleLanguage);

router.put("/:id", updateLanguage);

router.delete("/:id", deleteLanguage);

module.exports = router;