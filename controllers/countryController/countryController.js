const Country = require("../../models/countryModel/countryModel");

const createCountry = async (req, res) => {

    try {

        const { country } = req.body;

        if (!country) {

            return res.status(400).json({
                success: false,
                message: "Country Name is Required"
            });

        }

        const checkCountry = await Country.findOne({ country });

        if (checkCountry) {

            return res.status(400).json({
                success: false,
                message: "Country Already Exists"
            });

        }

        const newCountry = await Country.create({ country });

        return res.status(201).json({
            success: true,
            message: "Country Created Successfully",
            data: newCountry
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getAllCountry = async (req, res) => {

    try {

        const countries = await Country.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            total: countries.length,
            data: countries
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getSingleCountry = async (req, res) => {

    try {

        const country = await Country.findById(req.params.id);

        if (!country) {

            return res.status(404).json({
                success: false,
                message: "Country Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            data: country
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateCountry = async (req, res) => {

    try {

        const { country } = req.body;

        const updateCountry = await Country.findByIdAndUpdate(

            req.params.id,

            { country },

            {
                new: true,
                runValidators: true
            }

        );

        if (!updateCountry) {

            return res.status(404).json({
                success: false,
                message: "Country Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Country Updated Successfully",
            data: updateCountry
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteCountry = async (req, res) => {

    try {

        const deleteCountry = await Country.findByIdAndDelete(req.params.id);

        if (!deleteCountry) {

            return res.status(404).json({
                success: false,
                message: "Country Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Country Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createCountry,
    getAllCountry,
    getSingleCountry,
    updateCountry,
    deleteCountry
};