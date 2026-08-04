const express = require("express");

const router = express.Router();

const {
    createActor,
    getAllActor,
    getSingleActor,
    updateActor,
    deleteActor
} = require("../../controllers/actorController/actorController");
const { authorize } = require("../../middleware/authMiddleware");

router.post("/", authorize("admin"), createActor);

router.get("/", authorize("admin", "staff"), getAllActor);

router.get("/:id", authorize("admin", "staff"), getSingleActor);

router.put("/:id", authorize("admin"), updateActor);

router.delete("/:id", authorize("admin"), deleteActor);

module.exports = router;