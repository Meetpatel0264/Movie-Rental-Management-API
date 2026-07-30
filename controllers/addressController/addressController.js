const Address = require("../../models/addressModel/addressModel");
const City = require("../../models/cityModel/cityModel");

const createAddress = async (req, res) => {
    try {
        const {
            address,
            address2,
            district,
            city_id,
            postal_code,
            phone
        } = req.body;

        if (!address || !district || !city_id || !postal_code || !phone) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"

            });
        }

        const checkCity = await City.findById(city_id);

        if (!checkCity) {
            return res.status(404).json({
                success: false,
                message: "City Not Found"
            });
        }

        const newAddress = await Address.create({
            address,
            address2,
            district,
            city_id,
            postal_code,
            phone
        });

        return res.status(201).json({
            success: true,
            message: "Address Created Successfully",
            data: newAddress
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAllAddress = async (req, res) => {

    try {

        const address = await Address.find();

        return res.status(200).json({

            success: true,
            total: address.length,
            data: address

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const getSingleAddress = async (req, res) => {

    try {

        const address = await Address.findById(req.params.id);

        if (!address) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            data: address

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const updateAddress = async (req, res) => {

    try {

        const checkCity = await City.findById(req.body.cityId);

        if (!checkCity) {

            return res.status(404).json({

                success: false,
                message: "City Not Found"

            });

        }

        const address = await Address.findByIdAndUpdate(

            req.params.id,
            req.body

        );

        if (!address) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Address Updated Successfully",
            data: address

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const deleteAddress = async (req, res) => {

    try {

        const address = await Address.findByIdAndDelete(req.params.id);

        if (!address) {

            return res.status(404).json({

                success: false,

                message: "Address Not Found"

            });

        }

        return res.status(200).json({

            success: true,

            message: "Address Deleted Successfully"

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

    createAddress,
    getAllAddress,
    getSingleAddress,
    updateAddress,
    deleteAddress

};