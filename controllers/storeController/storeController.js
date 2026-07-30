const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");



const createStore = async (req, res) => {

    try {

        const { manager_staff_id, address_id } = req.body;

        const address = await Address.findById(address_id);

        if (!address) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const store = await Store.create({

            manager_staff_id,
            address_id,
            last_update: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Store Created Successfully",
            data: store

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};




const getAllStore = async (req, res) => {

    try {

        const stores = await Store.find()

            .populate("manager_staff_id")

            .populate({

                path: "address_id",

                populate: {

                    path: "city_id",

                    populate: {

                        path: "country_id"

                    }

                }

            });

        return res.status(200).json({

            success: true,
            total: stores.length,
            data: stores

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};





const getSingleStore = async (req, res) => {

    try {

        const store = await Store.findById(req.params.id)

            .populate("manager_staff_id")

            .populate({

                path: "address_id",

                populate: {

                    path: "city_id",

                    populate: {

                        path: "country_id"

                    }

                }

            });

        if (!store) {

            return res.status(404).json({

                success: false,
                message: "Store Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            data: store

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};





const updateStore = async (req, res) => {

    try {

        const { manager_staff_id, address_id } = req.body;

        const address = await Address.findById(address_id);

        if (!address) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        const store = await Store.findByIdAndUpdate(

            req.params.id,

            {

                manager_staff_id,
                address_id,
                last_update: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )

            .populate("manager_staff_id")

            .populate({

                path: "address_id",

                populate: {

                    path: "city_id",

                    populate: {

                        path: "country_id"

                    }

                }

            });

        if (!store) {

            return res.status(404).json({

                success: false,
                message: "Store Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Store Updated Successfully",
            data: store

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};





const deleteStore = async (req, res) => {

    try {

        const store = await Store.findByIdAndDelete(req.params.id);

        if (!store) {

            return res.status(404).json({

                success: false,
                message: "Store Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Store Deleted Successfully"

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

    createStore,
    getAllStore,
    getSingleStore,
    updateStore,
    deleteStore

};