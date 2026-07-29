const Language = require("../../models/languageModel/languageModel");

// Create Language

const createLanguage = async (req, res) => {

    try {

        const { name } = req.body;

        if (!name) {

            return res.status(400).json({
                success: false,
                message: "Language name is required"
            });

        }

        const checkLanguage = await Language.findOne({ name });

        if (checkLanguage) {

            return res.status(400).json({
                success: false,
                message: "Language already exists"
            });

        }

        const language = await Language.create({ name });

        return res.status(201).json({
            success: true,
            message: "Language created successfully",
            data: language
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Language

const getAllLanguage = async (req, res) => {

    try {

        const language = await Language.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            total: language.length,
            data: language
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Single Language

const getSingleLanguage = async (req, res) => {

    try {

        const language = await Language.findById(req.params.id);

        if (!language) {

            return res.status(404).json({
                success: false,
                message: "Language not found"
            });

        }

        return res.status(200).json({
            success: true,
            data: language
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Language

const updateLanguage = async (req, res) => {

    try {

        const language = await Language.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!language) {

            return res.status(404).json({
                success: false,
                message: "Language not found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Language updated successfully",
            data: language
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Language

const deleteLanguage = async (req, res) => {

    try {

        const language = await Language.findByIdAndDelete(req.params.id);

        if (!language) {

            return res.status(404).json({
                success: false,
                message: "Language not found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Language deleted successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createLanguage,
    getAllLanguage,
    getSingleLanguage,
    updateLanguage,
    deleteLanguage
};