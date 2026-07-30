const FilmCategory = require("../../models/filmCategoryModel/filmCategoryModel");
const Film = require("../../models/filmModel/filmModel");
const Category = require("../../models/categoryModel/categoryModel");


const createFilmCategory = async (req, res) => {

    try {

        const { filmId, categoryId } = req.body;

        const checkFilm = await Film.findById(filmId);

        if (!checkFilm) {

            return res.status(404).json({
                success: false,
                message: "Film Not Found"
            });

        }

        const checkCategory = await Category.findById(categoryId);

        if (!checkCategory) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });

        }

        const checkFilmCategory = await FilmCategory.findOne({
            filmId,
            categoryId
        });

        if (checkFilmCategory) {

            return res.status(400).json({
                success: false,
                message: "Film Category Already Exists"
            });

        }

        const filmCategory = await FilmCategory.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Film Category Created Successfully",
            data: filmCategory
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getAllFilmCategory = async (req, res) => {

    try {

        const filmCategories = await FilmCategory.find();

        return res.status(200).json({
            success: true,
            total: filmCategories.length,
            data: filmCategories
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getSingleFilmCategory = async (req, res) => {

    try {

        const filmCategory = await FilmCategory.findById(req.params.id);

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

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateFilmCategory = async (req, res) => {

    try {

        const { filmId, categoryId } = req.body;

        const checkFilm = await Film.findById(filmId);

        if (!checkFilm) {

            return res.status(404).json({
                success: false,
                message: "Film Not Found"
            });

        }

        const checkCategory = await Category.findById(categoryId);

        if (!checkCategory) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });

        }

        const checkFilmCategory = await FilmCategory.findOne({

            filmId,
            categoryId,
            _id: { $ne: req.params.id }

        });

        if (checkFilmCategory) {

            return res.status(400).json({
                success: false,
                message: "Film Category Already Exists"
            });

        }

        const updatedFilmCategory = await FilmCategory.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedFilmCategory) {

            return res.status(404).json({
                success: false,
                message: "Film Category Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Film Category Updated Successfully",
            data: updatedFilmCategory
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


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

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createFilmCategory,
    getAllFilmCategory,
    getSingleFilmCategory,
    updateFilmCategory,
    deleteFilmCategory

};