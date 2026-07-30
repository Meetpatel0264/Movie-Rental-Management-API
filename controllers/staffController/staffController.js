const Staff = require("../../models/staffModel/staffModel");
const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");


const createStaff = async (req, res) => {

    try {

        const { address_id, store_id, email, username } = req.body;

        const checkAddress = await Address.findById(address_id);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const checkStore = await Store.findById(store_id);

        if (!checkStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const checkEmail = await Staff.findOne({ email });

        if (checkEmail) {

            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            });

        }

        const checkUsername = await Staff.findOne({ username });

        if (checkUsername) {

            return res.status(400).json({
                success: false,
                message: "Username Already Exists"
            });

        }

        const staff = await Staff.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Staff Created Successfully",
            data: staff
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getAllStaff = async (req, res) => {

    try {

        const staff = await Staff.find();

        return res.status(200).json({
            success: true,
            total: staff.length,
            data: staff
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getSingleStaff = async (req, res) => {

    try {

        const staff = await Staff.findById(req.params.id);

        if (!staff) {

            return res.status(404).json({
                success: false,
                message: "Staff Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            data: staff
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateStaff = async (req, res) => {

    try {

        const { address_id, store_id, email, username } = req.body;

        const checkAddress = await Address.findById(address_id);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const checkStore = await Store.findById(store_id);

        if (!checkStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const checkEmail = await Staff.findOne({

            email,
            _id: { $ne: req.params.id }

        });

        if (checkEmail) {

            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            });

        }

        const checkUsername = await Staff.findOne({

            username,
            _id: { $ne: req.params.id }

        });

        if (checkUsername) {

            return res.status(400).json({
                success: false,
                message: "Username Already Exists"
            });

        }

        const updatedStaff = await Staff.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedStaff) {

            return res.status(404).json({
                success: false,
                message: "Staff Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Staff Updated Successfully",
            data: updatedStaff
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const deleteStaff = async (req, res) => {

    try {

        const staff = await Staff.findByIdAndDelete(req.params.id);

        if (!staff) {

            return res.status(404).json({
                success: false,
                message: "Staff Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Staff Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createStaff,
    getAllStaff,
    getSingleStaff,
    updateStaff,
    deleteStaff

};