const express = require("express");

const router = express.Router();

const {

    createFilmActor,
    getAllFilmActor,
    getSingleFilmActor,
    updateFilmActor,
    deleteFilmActor

} = require("../../controllers/filmActorController/filmActorController");

router.post("/", createFilmActor);

router.get("/", getAllFilmActor);

router.get("/:id", getSingleFilmActor);

router.put("/:id", updateFilmActor);

router.delete("/:id", deleteFilmActor);

module.exports = router;