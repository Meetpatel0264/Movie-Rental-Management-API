const City = require("../../models/cityModel/cityModel");
const Country = require("../../models/countryModel/countryModel");


// ================= Create City =================

const createCity = async (req, res) => {

    try {

        const { city, country_id } = req.body;

        if (!city || !country_id) {

            return res.status(400).json({
                success: false,
                message: "City and Country are required"
            });

        }

        const checkCountry = await Country.findById(country_id);

        if (!checkCountry) {

            return res.status(404).json({
                success: false,
                message: "Country Not Found"
            });

        }

        const checkCity = await City.findOne({
            city,
            country_id
        });

        if (checkCity) {

            return res.status(400).json({
                success: false,
                message: "City Already Exists"
            });

        }

        const newCity = await City.create({

            city,
            country_id

        });

        return res.status(201).json({

            success: true,
            message: "City Created Successfully",
            data: newCity

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// ================= Get All City =================

const getAllCity = async (req, res) => {

    try {

        const city = await City.find()

            .populate("country_id", "country")

            .sort({ createdAt: -1 });

        return res.status(200).json({

            success: true,
            total: city.length,
            data: city

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


// ================= Get Single City =================

const getSingleCity = async (req, res) => {

    try {

        const city = await City.findById(req.params.id)

            .populate("country_id", "country");

        if (!city) {

            return res.status(404).json({

                success: false,
                message: "City Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            data: city

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


// ================= Update City =================

const updateCity = async (req, res) => {

    try {

        const { city, country_id } = req.body;

        const checkCountry = await Country.findById(country_id);

        if (!checkCountry) {

            return res.status(404).json({

                success: false,
                message: "Country Not Found"

            });

        }

        const updateCity = await City.findByIdAndUpdate(

            req.params.id,

            {
                city,
                country_id
            },

            {
                new: true,
                runValidators: true
            }

        ).populate("country_id", "country");

        if (!updateCity) {

            return res.status(404).json({

                success: false,
                message: "City Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "City Updated Successfully",
            data: updateCity

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


// ================= Delete City =================

const deleteCity = async (req, res) => {

    try {

        const city = await City.findByIdAndDelete(req.params.id);

        if (!city) {

            return res.status(404).json({

                success: false,
                message: "City Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "City Deleted Successfully"

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    createCity,
    getAllCity,
    getSingleCity,
    updateCity,
    deleteCity

};