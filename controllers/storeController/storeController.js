const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");


// Create Store

const createStore = async (req, res) => {

    try {

        const { manager_staff, address_id } = req.body;

        if (!manager_staff || !address_id) {

            return res.status(400).json({
                success: false,
                message: "All Fields Required"
            });

        }

        const checkAddress = await Address.findById(address_id);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const store = await Store.create({

            manager_staff,
            address_id

        });

        return res.status(201).json({

            success: true,
            message: "Store Created Successfully",
            data: store

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// Get All Store

const getAllStore = async (req, res) => {

    try {

        const store = await Store.find()

            .populate({

                path: "address_id",

                populate: {

                    path: "city_id",

                    populate: {

                        path: "country_id"

                    }

                }

            })

            .sort({ createdAt: -1 });

        return res.status(200).json({

            success: true,
            total: store.length,
            data: store

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// Get Single Store

const getSingleStore = async (req, res) => {

    try {

        const store = await Store.findById(req.params.id)

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

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// Update Store

const updateStore = async (req, res) => {

    try {

        const { manager_staff, address_id } = req.body;

        const checkAddress = await Address.findById(address_id);

        if (!checkAddress) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        const store = await Store.findByIdAndUpdate(

            req.params.id,

            {
                manager_staff,
                address_id
            },

            {
                new: true,
                runValidators: true
            }

        ).populate({

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

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// Delete Store

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

    } catch (error) {

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