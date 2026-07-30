const FilmActor = require("../../models/filmActorModel/filmActorModel");
const Actor = require("../../models/actorModel/actorModel");
const Film = require("../../models/filmModel/filmModel");


const createFilmActor = async (req, res) => {

    try {

        const { actorId, filmId } = req.body;

        const actor = await Actor.findById(actorId);

        if (!actor) {

            return res.status(404).json({

                success: false,
                message: "Actor Not Found"

            });

        }

        const film = await Film.findById(filmId);

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        const filmActorExists = await FilmActor.findOne({

            actorId,
            filmId

        });

        if (filmActorExists) {

            return res.status(400).json({

                success: false,
                message: "Film Actor Already Exists"

            });

        }

        const filmActor = await FilmActor.create({

            actorId,
            filmId,
            lastUpdate: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Film Actor Created Successfully",
            data: filmActor

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const getAllFilmActor = async (req, res) => {

    try {

        const filmActors = await FilmActor.find()

            .populate("actorId")

            .populate("filmId");

        return res.status(200).json({

            success: true,
            total: filmActors.length,
            data: filmActors

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const getSingleFilmActor = async (req, res) => {

    try {

        const filmActor = await FilmActor.findById(req.params.id)

            .populate("actorId")

            .populate("filmId");

        if (!filmActor) {

            return res.status(404).json({

                success: false,
                message: "Film Actor Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            data: filmActor

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const updateFilmActor = async (req, res) => {

    try {

        const { actorId, filmId } = req.body;

        const actor = await Actor.findById(actorId);

        if (!actor) {

            return res.status(404).json({

                success: false,
                message: "Actor Not Found"

            });

        }

        const film = await Film.findById(filmId);

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        const filmActorExists = await FilmActor.findOne({

            actorId,
            filmId,
            _id: { $ne: req.params.id }

        });

        if (filmActorExists) {

            return res.status(400).json({

                success: false,
                message: "Film Actor Already Exists"

            });

        }

        const filmActor = await FilmActor.findByIdAndUpdate(

            req.params.id,

            {

                actorId,
                filmId,
                lastUpdate: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )

            .populate("actorId")

            .populate("filmId");

        if (!filmActor) {

            return res.status(404).json({

                success: false,
                message: "Film Actor Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Film Actor Updated Successfully",
            data: filmActor

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const deleteFilmActor = async (req, res) => {

    try {

        const filmActor = await FilmActor.findByIdAndDelete(req.params.id);

        if (!filmActor) {

            return res.status(404).json({

                success: false,
                message: "Film Actor Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Film Actor Deleted Successfully"

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


module.exports = {

    createFilmActor,
    getAllFilmActor,
    getSingleFilmActor,
    updateFilmActor,
    deleteFilmActor

};