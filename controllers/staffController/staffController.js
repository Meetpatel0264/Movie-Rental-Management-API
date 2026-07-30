const Staff = require("../../models/staffModel/staffModel");
const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");


const createStaff = async (req, res) => {

    try {

        const {

            firstName,
            lastName,
            address_id,
            email,
            store_id,
            active,
            username,
            password,
            picture

        } = req.body;

        const address = await Address.findById(address_id);

        if (!address) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        const store = await Store.findById(store_id);

        if (!store) {

            return res.status(404).json({

                success: false,
                message: "Store Not Found"

            });

        }

        const emailExists = await Staff.findOne({ email });

        if (emailExists) {

            return res.status(400).json({

                success: false,
                message: "Email Already Exists"

            });

        }

        const usernameExists = await Staff.findOne({ username });

        if (usernameExists) {

            return res.status(400).json({

                success: false,
                message: "Username Already Exists"

            });

        }

        const staff = await Staff.create({

            firstName,
            lastName,
            address_id,
            email,
            store_id,
            active,
            username,
            password,
            picture,
            last_update: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Staff Created Successfully",
            data: staff

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


const getAllStaff = async (req, res) => {

    try {

        const staff = await Staff.find()

            .populate({
                path: "address_id",
                populate: {
                    path: "city_id",
                    populate: {
                        path: "country_id"
                    }
                }
            })

            .populate({
                path: "store_id",
                populate: {
                    path: "address_id",
                    populate: {
                        path: "city_id",
                        populate: {
                            path: "country_id"
                        }
                    }
                }
            });

        return res.status(200).json({

            success: true,
            total: staff.length,
            data: staff

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const getSingleStaff = async (req, res) => {

    try {

        const staff = await Staff.findById(req.params.id)

            .populate({
                path: "address_id",
                populate: {
                    path: "city_id",
                    populate: {
                        path: "country_id"
                    }
                }
            })

            .populate({
                path: "store_id",
                populate: {
                    path: "address_id",
                    populate: {
                        path: "city_id",
                        populate: {
                            path: "country_id"
                        }
                    }
                }
            });

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

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateStaff = async (req, res) => {

    try {

        const {

            firstName,
            lastName,
            address_id,
            email,
            store_id,
            active,
            username,
            password,
            picture

        } = req.body;

        const address = await Address.findById(address_id);

        if (!address) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const store = await Store.findById(store_id);

        if (!store) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const emailExists = await Staff.findOne({
            email,
            _id: { $ne: req.params.id }
        });

        if (emailExists) {

            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            });

        }

        const usernameExists = await Staff.findOne({
            username,
            _id: { $ne: req.params.id }
        });

        if (usernameExists) {

            return res.status(400).json({
                success: false,
                message: "Username Already Exists"
            });

        }

        const staff = await Staff.findByIdAndUpdate(

            req.params.id,

            {

                firstName,
                lastName,
                address_id,
                email,
                store_id,
                active,
                username,
                password,
                picture,
                last_update: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )
            .populate({
                path: "address_id",
                populate: {
                    path: "city_id",
                    populate: {
                        path: "country_id"
                    }
                }
            })

            .populate({
                path: "store_id",
                populate: {
                    path: "address_id",
                    populate: {
                        path: "city_id",
                        populate: {
                            path: "country_id"
                        }
                    }
                }
            });

        if (!staff) {

            return res.status(404).json({
                success: false,
                message: "Staff Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Staff Updated Successfully",
            data: staff
        });

    }

    catch (error) {

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

    }

    catch (error) {

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