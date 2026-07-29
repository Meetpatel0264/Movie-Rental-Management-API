const express = require("express");

const router = express.Router();

const {
    createActor,
    getAllActor,
    getSingleActor,
    updateActor,
    deleteActor
} = require("../../controllers/actorController/actorController");

router.post("/", createActor);

router.get("/", getAllActor);

router.get("/:id", getSingleActor);

router.put("/:id", updateActor);

router.delete("/:id", deleteActor);

module.exports = router;