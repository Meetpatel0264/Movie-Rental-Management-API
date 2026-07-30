const Address = require("../../models/addressModel/addressModel");
const City = require("../../models/cityModel/cityModel");

// Create Address
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

        const checkAddress = await Address.findOne({
            address,
            city_id
        });

        if (checkAddress) {
            return res.status(400).json({
                success: false,
                message: "Address Already Exists"
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

// Get All Address
const getAllAddress = async (req, res) => {
    try {

        const address = await Address.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            total: address.length,
            data: address
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Single Address
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

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Address
const updateAddress = async (req, res) => {
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

        const checkAddress = await Address.findOne({
            address,
            city_id,
            _id: { $ne: req.params.id }
        });

        if (checkAddress) {
            return res.status(400).json({
                success: false,
                message: "Address Already Exists"
            });
        }

        const updatedAddress = await Address.findByIdAndUpdate(
            req.params.id,
            {
                address,
                address2,
                district,
                city_id,
                postal_code,
                phone
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedAddress) {
            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Address Updated Successfully",
            data: updatedAddress
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Delete Address
const deleteAddress = async (req, res) => {
    try {

        const deletedAddress = await Address.findByIdAndDelete(req.params.id);

        if (!deletedAddress) {
            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Address Deleted Successfully",
            data: deletedAddress
        });

    } catch (error) {

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