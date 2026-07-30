const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");

const createStore = async (req, res) => {

    try {

        const { address_id } = req.body;

        const checkAddress = await Address.findById(address_id);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const store = await Store.create(req.body);

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

const getAllStore = async (req, res) => {

    try {

        const stores = await Store.find();

        return res.status(200).json({
            success: true,
            total: stores.length,
            data: stores
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getSingleStore = async (req, res) => {

    try {

        const store = await Store.findById(req.params.id);

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

const updateStore = async (req, res) => {

    try {

        const { address_id } = req.body;

        const checkAddress = await Address.findById(address_id);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const updatedStore = await Store.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Store Updated Successfully",
            data: updatedStore
        });

    } catch (error) {

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