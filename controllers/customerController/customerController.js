const Customer = require("../../models/customerModel/customerModel");
const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");


const createCustomer = async (req, res) => {

    try {

        const { storeId, email, addressId } = req.body;

        const checkStore = await Store.findById(storeId);

        if (!checkStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const checkAddress = await Address.findById(addressId);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const checkEmail = await Customer.findOne({ email });

        if (checkEmail) {

            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            });

        }

        const customer = await Customer.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Customer Created Successfully",
            data: customer
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getAllCustomer = async (req, res) => {

    try {

        const customers = await Customer.find();

        return res.status(200).json({
            success: true,
            total: customers.length,
            data: customers
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getSingleCustomer = async (req, res) => {

    try {

        const customer = await Customer.findById(req.params.id);

        if (!customer) {

            return res.status(404).json({
                success: false,
                message: "Customer Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            data: customer
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateCustomer = async (req, res) => {

    try {

        const { storeId, email, addressId } = req.body;

        const checkStore = await Store.findById(storeId);

        if (!checkStore) {

            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });

        }

        const checkAddress = await Address.findById(addressId);

        if (!checkAddress) {

            return res.status(404).json({
                success: false,
                message: "Address Not Found"
            });

        }

        const checkEmail = await Customer.findOne({

            email,
            _id: { $ne: req.params.id }

        });

        if (checkEmail) {

            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            });

        }

        const customer = await Customer.findByIdAndUpdate(

            req.params.id,
            req.body

        );

        if (!customer) {

            return res.status(404).json({
                success: false,
                message: "Customer Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Customer Updated Successfully",
            data: customer
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const deleteCustomer = async (req, res) => {

    try {

        const customer = await Customer.findByIdAndDelete(req.params.id);

        if (!customer) {

            return res.status(404).json({
                success: false,
                message: "Customer Not Found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Customer Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer

};