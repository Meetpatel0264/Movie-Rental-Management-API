const Inventory = require("../../models/inventoryModel/inventoryModel");
const Film = require("../../models/filmModel/filmModel");
const Store = require("../../models/storeModel/storeModel");


const createInventory = async (req, res) => {

    try {

        const { filmId, storeId } = req.body;

        const checkFilm = await Film.findById(filmId);

        if (!checkFilm) {

            return res.status(404).json({
                success: false,
                message: "Film Not Found"
            });

        }

        const checkStore = await Store.findById(storeId);

        if (!checkStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const checkInventory = await Inventory.findOne({
            filmId,
            storeId
        });

        if (checkInventory) {

            return res.status(400).json({
                success: false,
                message: "Inventory Already Exists"
            });

        }

        const inventory = await Inventory.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Inventory Created Successfully",
            data: inventory
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getAllInventory = async (req, res) => {

    try {

        const inventories = await Inventory.find();

        return res.status(200).json({
            success: true,
            total: inventories.length,
            data: inventories
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getSingleInventory = async (req, res) => {

    try {

        const inventory = await Inventory.findById(req.params.id);

        if (!inventory) {

            return res.status(404).json({
                success: false,
                message: "Inventory Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            data: inventory
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateInventory = async (req, res) => {

    try {

        const { filmId, storeId } = req.body;

        const checkFilm = await Film.findById(filmId);

        if (!checkFilm) {

            return res.status(404).json({
                success: false,
                message: "Film Not Found"
            });

        }

        const checkStore = await Store.findById(storeId);

        if (!checkStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const checkInventory = await Inventory.findOne({

            filmId,
            storeId,
            _id: { $ne: req.params.id }

        });

        if (checkInventory) {

            return res.status(400).json({
                success: false,
                message: "Inventory Already Exists"
            });

        }

        const updatedInventory = await Inventory.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedInventory) {

            return res.status(404).json({
                success: false,
                message: "Inventory Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Inventory Updated Successfully",
            data: updatedInventory
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const deleteInventory = async (req, res) => {

    try {

        const inventory = await Inventory.findByIdAndDelete(req.params.id);

        if (!inventory) {

            return res.status(404).json({
                success: false,
                message: "Inventory Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Inventory Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createInventory,
    getAllInventory,
    getSingleInventory,
    updateInventory,
    deleteInventory

};