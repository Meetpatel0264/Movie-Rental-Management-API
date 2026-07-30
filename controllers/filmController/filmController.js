const Film = require("../../models/filmModel/filmModel");
const Language = require("../../models/languageModel/languageModel");

const createFilm = async (req, res) => {

    try {

        const { languageId, originalLanguageId } = req.body;

        const checkLanguage = await Language.findById(languageId);

        if (!checkLanguage) {

            return res.status(404).json({
                success: false,
                message: "Language Not Found"
            });

        }

        if (originalLanguageId) {

            const checkOriginalLanguage = await Language.findById(originalLanguageId);

            if (!checkOriginalLanguage) {

                return res.status(404).json({
                    success: false,
                    message: "Original Language Not Found"
                });

            }

        }

        const film = await Film.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Film Created Successfully",
            data: film
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getAllFilm = async (req, res) => {

    try {

        const films = await Film.find();

        return res.status(200).json({
            success: true,
            total: films.length,
            data: films
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getSingleFilm = async (req, res) => {

    try {

        const film = await Film.findById(req.params.id);

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

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateFilm = async (req, res) => {

    try {

        const { languageId, originalLanguageId } = req.body;

        const checkLanguage = await Language.findById(languageId);

        if (!checkLanguage) {

            return res.status(404).json({
                success: false,
                message: "Language Not Found"
            });

        }

        if (originalLanguageId) {

            const checkOriginalLanguage = await Language.findById(originalLanguageId);

            if (!checkOriginalLanguage) {

                return res.status(404).json({
                    success: false,
                    message: "Original Language Not Found"
                });

            }

        }

        const updatedFilm = await Film.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedFilm) {

            return res.status(404).json({
                success: false,
                message: "Film Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Film Updated Successfully",
            data: updatedFilm
        });

    } catch (error) {

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

    } catch (error) {

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