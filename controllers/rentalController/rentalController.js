const Rental = require("../../models/rentalModel/rentalModel");
const Inventory = require("../../models/inventoryModel/inventoryModel");
const Customer = require("../../models/customerModel/customerModel");
const Staff = require("../../models/staffModel/staffModel");


const createRental = async (req, res) => {

    try {

        const { inventoryId, customerId, staffId } = req.body;

        const checkInventory = await Inventory.findById(inventoryId);

        if (!checkInventory) {

            return res.status(404).json({
                success: false,
                message: "Inventory Not Found"
            });

        }

        const checkCustomer = await Customer.findById(customerId);

        if (!checkCustomer) {

            return res.status(404).json({
                success: false,
                message: "Customer Not Found"
            });

        }

        const checkStaff = await Staff.findById(staffId);

        if (!checkStaff) {

            return res.status(404).json({
                success: false,
                message: "Staff Not Found"
            });

        }

        const rental = await Rental.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Rental Created Successfully",
            data: rental
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getAllRental = async (req, res) => {

    try {

        const rentals = await Rental.find();

        return res.status(200).json({
            success: true,
            total: rentals.length,
            data: rentals
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getSingleRental = async (req, res) => {

    try {

        const rental = await Rental.findById(req.params.id);

        if (!rental) {

            return res.status(404).json({
                success: false,
                message: "Rental Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            data: rental
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateRental = async (req, res) => {

    try {

        const { inventoryId, customerId, staffId } = req.body;

        const checkInventory = await Inventory.findById(inventoryId);

        if (!checkInventory) {

            return res.status(404).json({
                success: false,
                message: "Inventory Not Found"
            });

        }

        const checkCustomer = await Customer.findById(customerId);

        if (!checkCustomer) {

            return res.status(404).json({
                success: false,
                message: "Customer Not Found"
            });

        }

        const checkStaff = await Staff.findById(staffId);

        if (!checkStaff) {

            return res.status(404).json({
                success: false,
                message: "Staff Not Found"
            });

        }

        const updatedRental = await Rental.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedRental) {

            return res.status(404).json({
                success: false,
                message: "Rental Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Rental Updated Successfully",
            data: updatedRental
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const deleteRental = async (req, res) => {

    try {

        const rental = await Rental.findByIdAndDelete(req.params.id);

        if (!rental) {

            return res.status(404).json({
                success: false,
                message: "Rental Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Rental Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createRental,
    getAllRental,
    getSingleRental,
    updateRental,
    deleteRental

};