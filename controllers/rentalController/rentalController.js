const Rental = require("../../models/rentalModel/rentalModel");
const Inventory = require("../../models/inventoryModel/inventoryModel");
const Customer = require("../../models/customerModel/customerModel");
const Staff = require("../../models/staffModel/staffModel");


const createRental = async (req, res) => {

    try {

        const {

            rentalDate,
            inventoryId,
            customerId,
            returnDate,
            staffId

        } = req.body;

        const inventory = await Inventory.findById(inventoryId);

        if (!inventory) {

            return res.status(404).json({

                success: false,
                message: "Inventory Not Found"

            });

        }

        const customer = await Customer.findById(customerId);

        if (!customer) {

            return res.status(404).json({

                success: false,
                message: "Customer Not Found"

            });

        }

        const staff = await Staff.findById(staffId);

        if (!staff) {

            return res.status(404).json({

                success: false,
                message: "Staff Not Found"

            });

        }

        const rental = await Rental.create({

            rentalDate,
            inventoryId,
            customerId,
            returnDate,
            staffId,
            lastUpdate: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Rental Created Successfully",
            data: rental

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



const getAllRental = async (req, res) => {

    try {

        const rentals = await Rental.find()

            .populate({
                path: "inventoryId",
                populate: {
                    path: "filmId"
                }
            })

            .populate("customerId")

            .populate("staffId");

        return res.status(200).json({

            success: true,
            total: rentals.length,
            data: rentals

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



const getSingleRental = async (req, res) => {

    try {

        const rental = await Rental.findById(req.params.id)

            .populate({
                path: "inventoryId",
                populate: {
                    path: "filmId"
                }
            })

            .populate("customerId")

            .populate("staffId");

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

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



const updateRental = async (req, res) => {

    try {

        const {

            rentalDate,
            inventoryId,
            customerId,
            returnDate,
            staffId

        } = req.body;

        const inventory = await Inventory.findById(inventoryId);

        if (!inventory) {

            return res.status(404).json({

                success: false,
                message: "Inventory Not Found"

            });

        }

        const customer = await Customer.findById(customerId);

        if (!customer) {

            return res.status(404).json({

                success: false,
                message: "Customer Not Found"

            });

        }

        const staff = await Staff.findById(staffId);

        if (!staff) {

            return res.status(404).json({

                success: false,
                message: "Staff Not Found"

            });

        }

        const rental = await Rental.findByIdAndUpdate(

            req.params.id,

            {

                rentalDate,
                inventoryId,
                customerId,
                returnDate,
                staffId,
                lastUpdate: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )

            .populate({
                path: "inventoryId",
                populate: {
                    path: "filmId"
                }
            })

            .populate("customerId")

            .populate("staffId");

        if (!rental) {

            return res.status(404).json({

                success: false,
                message: "Rental Not Found"

            });

        }

        return res.status(200).json({

            success: true,
            message: "Rental Updated Successfully",
            data: rental

        });

    }

    catch (error) {

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

    }

    catch (error) {

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