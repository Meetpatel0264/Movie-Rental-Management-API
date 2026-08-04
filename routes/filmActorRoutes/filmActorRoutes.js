const express = require("express");

const router = express.Router();

const {

    createFilmActor,
    getAllFilmActor,
    getSingleFilmActor,
    updateFilmActor,
    deleteFilmActor

} = require("../../controllers/filmActorController/filmActorController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createFilmActor);

router.get("/", authorize("admin", "staff"), getAllFilmActor);

router.get("/:id", authorize("admin", "staff"), getSingleFilmActor);

router.put("/:id", authorize("admin"), updateFilmActor);

router.delete("/:id", authorize("admin"), deleteFilmActor);

module.exports = router;