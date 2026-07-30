const FilmCategory = require("../../models/filmCategoryModel/filmCategoryModel");
const Film = require("../../models/filmModel/filmModel");
const Category = require("../../models/categoryModel/categoryModel");


// ==================== Create Film Category ====================

const createFilmCategory = async (req, res) => {

    try {

        const {

            filmId,
            categoryId

        } = req.body;

        const film = await Film.findById(filmId);

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        const category = await Category.findById(categoryId);

        if (!category) {

            return res.status(404).json({

                success: false,
                message: "Category Not Found"

            });

        }

        const filmCategoryExists = await FilmCategory.findOne({

            filmId,
            categoryId

        });

        if (filmCategoryExists) {

            return res.status(400).json({

                success: false,
                message: "Film Category Already Exists"

            });

        }

        const filmCategory = await FilmCategory.create({

            filmId,
            categoryId,
            lastUpdate: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Film Category Created Successfully",
            data: filmCategory

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// ==================== Get All Film Category ====================

const getAllFilmCategory = async (req, res) => {

    try {

        const filmCategories = await FilmCategory.find()

            .populate("filmId")

            .populate("categoryId");

        return res.status(200).json({

            success: true,
            total: filmCategories.length,
            data: filmCategories

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


// ==================== Get Single Film Category ====================

const getSingleFilmCategory = async (req, res) => {

    try {

        const filmCategory = await FilmCategory.findById(req.params.id)

            .populate("filmId")

            .populate("categoryId");

        if (!filmCategory) {

            return res.status(404).json({

                success: false,
                message: "Film Category Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            data: filmCategory

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// ==================== Update Film Category ====================

const updateFilmCategory = async (req, res) => {

    try {

        const {

            filmId,
            categoryId

        } = req.body;

        const film = await Film.findById(filmId);

        if (!film) {

            return res.status(404).json({

                success: false,
                message: "Film Not Found"

            });

        }

        const category = await Category.findById(categoryId);

        if (!category) {

            return res.status(404).json({

                success: false,
                message: "Category Not Found"

            });

        }

        const filmCategoryExists = await FilmCategory.findOne({

            filmId,
            categoryId,
            _id: { $ne: req.params.id }

        });

        if (filmCategoryExists) {

            return res.status(400).json({

                success: false,
                message: "Film Category Already Exists"

            });

        }

        const filmCategory = await FilmCategory.findByIdAndUpdate(

            req.params.id,

            {

                filmId,
                categoryId,
                lastUpdate: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )

            .populate("filmId")

            .populate("categoryId");

        if (!filmCategory) {

            return res.status(404).json({

                success: false,
                message: "Film Category Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Film Category Updated Successfully",
            data: filmCategory

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// ==================== Delete Film Category ====================

const deleteFilmCategory = async (req, res) => {

    try {

        const filmCategory = await FilmCategory.findByIdAndDelete(req.params.id);

        if (!filmCategory) {

            return res.status(404).json({

                success: false,
                message: "Film Category Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Film Category Deleted Successfully"

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// ==================== Exports ====================

module.exports = {

    createFilmCategory,
    getAllFilmCategory,
    getSingleFilmCategory,
    updateFilmCategory,
    deleteFilmCategory

};