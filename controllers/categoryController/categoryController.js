const Category = require("../../models/categoryModel/categoryModel");

const createCategory = async (req, res) => {

    try {

        const { name } = req.body;

        if (!name) {

            return res.status(400).json({
                success: false,
                message: "Category Name is Required"
            });

        }

        const checkCategory = await Category.findOne({ name });

        if (checkCategory) {

            return res.status(400).json({
                success: false,
                message: "Category Already Exists"
            });

        }

        const category = await Category.create({ name });

        return res.status(201).json({
            success: true,
            message: "Category Created Successfully",
            data: category
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getAllCategory = async (req, res) => {

    try {

        const category = await Category.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            total: category.length,
            data: category
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getSingleCategory = async (req, res) => {

    try {

        const category = await Category.findById(req.params.id);

        if (!category) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            data: category
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateCategory = async (req, res) => {

    try {

        const { name } = req.body;

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { name },
            {
                new: true,
                runValidators: true
            }
        );

        if (!category) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Category Updated Successfully",
            data: category
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteCategory = async (req, res) => {

    try {

        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Category Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory

};