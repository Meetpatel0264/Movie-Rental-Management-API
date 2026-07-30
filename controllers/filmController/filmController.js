const Film = require("../../models/filmModel/filmModel");
const Language = require("../../models/languageModel/languageModel");


const createFilm = async (req, res) => {

    try {

        const {

            title,
            description,
            releaseYear,
            languageId,
            originalLanguageId,
            rentalDuration,
            rentalRate,
            length,
            replacementCost,
            rating,
            specialFeatures

        } = req.body;

        const language = await Language.findById(languageId);

        if (!language) {

            return res.status(404).json({

                success: false,
                message: "Language Not Found"

            });

        }

        if (originalLanguageId) {

            const originalLanguage = await Language.findById(originalLanguageId);

            if (!originalLanguage) {

                return res.status(404).json({

                    success: false,
                    message: "Original Language Not Found"

                });

            }

        }

        const film = await Film.create({

            title,
            description,
            releaseYear,
            languageId,
            originalLanguageId,
            rentalDuration,
            rentalRate,
            length,
            replacementCost,
            rating,
            specialFeatures,
            lastUpdate: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Film Created Successfully",
            data: film

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};




const getAllFilm = async (req, res) => {

    try {

        const films = await Film.find()

            .populate("languageId")

            .populate("originalLanguageId");

        return res.status(200).json({

            success: true,
            total: films.length,
            data: films

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const getSingleFilm = async (req, res) => {

    try {

        const film = await Film.findById(req.params.id)

            .populate("languageId")

            .populate("originalLanguageId");

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            data: film

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const updateFilm = async (req, res) => {

    try {

        const {

            title,
            description,
            releaseYear,
            languageId,
            originalLanguageId,
            rentalDuration,
            rentalRate,
            length,
            replacementCost,
            rating,
            specialFeatures

        } = req.body;

        const language = await Language.findById(languageId);

        if (!language) {

            return res.status(404).json({

                success: false,
                message: "Language Not Found"

            });

        }

        if (originalLanguageId) {

            const originalLanguage = await Language.findById(originalLanguageId);

            if (!originalLanguage) {

                return res.status(404).json({

                    success: false,
                    message: "Original Language Not Found"

                });

            }

        }

        const film = await Film.findByIdAndUpdate(

            req.params.id,

            {

                title,
                description,
                releaseYear,
                languageId,
                originalLanguageId,
                rentalDuration,
                rentalRate,
                length,
                replacementCost,
                rating,
                specialFeatures,
                lastUpdate: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )

            .populate("languageId")

            .populate("originalLanguageId");

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Film Updated Successfully",
            data: film

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const deleteFilm = async (req, res) => {

    try {

        const film = await Film.findByIdAndDelete(req.params.id);

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Film Deleted Successfully"

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

    createFilm,
    getAllFilm,
    getSingleFilm,
    updateFilm,
    deleteFilm

};