const Customer = require("../../models/customerModel/customerModel");
const Store = require("../../models/storeModel/storeModel");
const Address = require("../../models/addressModel/addressModel");


const createCustomer = async (req, res) => {

    try {

        const {

            storeId,
            firstName,
            lastName,
            email,
            addressId,
            active

        } = req.body;

        const store = await Store.findById(storeId);

        if (!store) {

            return res.status(404).json({

                success: false,
                message: "Store Not Found"

            });

        }

        const address = await Address.findById(addressId);

        if (!address) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        const emailExists = await Customer.findOne({ email });

        if (emailExists) {

            return res.status(400).json({

                success: false,
                message: "Email Already Exists"

            });

        }

        const customer = await Customer.create({

            storeId,
            firstName,
            lastName,
            email,
            addressId,
            active,
            createDate: new Date(),
            lastUpdate: new Date()

        });

        return res.status(201).json({

            success: true,
            message: "Customer Created Successfully",
            data: customer

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



const getAllCustomer = async (req, res) => {

    try {

        const customers = await Customer.find()

            .populate({

                path: "storeId",

                populate: {

                    path: "addressId",

                    populate: {

                        path: "cityId",

                        populate: {

                            path: "countryId"

                        }

                    }

                }

            })

            .populate({

                path: "addressId",

                populate: {

                    path: "cityId",

                    populate: {

                        path: "countryId"

                    }

                }

            });

        return res.status(200).json({

            success: true,
            total: customers.length,
            data: customers

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const getSingleCustomer = async (req, res) => {

    try {

        const customer = await Customer.findById(req.params.id)

            .populate({

                path: "storeId",

                populate: {

                    path: "addressId",

                    populate: {

                        path: "cityId",

                        populate: {

                            path: "countryId"

                        }

                    }

                }

            })

            .populate({

                path: "addressId",

                populate: {

                    path: "cityId",

                    populate: {

                        path: "countryId"

                    }

                }

            });

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

    }

    catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



const updateCustomer = async (req, res) => {

    try {

        const {

            storeId,
            firstName,
            lastName,
            email,
            addressId,
            active

        } = req.body;

        const store = await Store.findById(storeId);

        if (!store) {

            return res.status(404).json({

                success: false,
                message: "Store Not Found"

            });

        }

        const address = await Address.findById(addressId);

        if (!address) {

            return res.status(404).json({

                success: false,
                message: "Address Not Found"

            });

        }

        const emailExists = await Customer.findOne({

            email,
            _id: { $ne: req.params.id }

        });

        if (emailExists) {

            return res.status(400).json({

                success: false,
                message: "Email Already Exists"

            });

        }

        const customer = await Customer.findByIdAndUpdate(

            req.params.id,

            {

                storeId,
                firstName,
                lastName,
                email,
                addressId,
                active,
                lastUpdate: new Date()

            },

            {

                new: true,
                runValidators: true

            }

        )

            .populate({

                path: "storeId",

                populate: {

                    path: "addressId",

                    populate: {

                        path: "cityId",

                        populate: {

                            path: "countryId"

                        }

                    }

                }

            })

            .populate({

                path: "addressId",

                populate: {

                    path: "cityId",

                    populate: {

                        path: "countryId"

                    }

                }

            });

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

    }

    catch (error) {

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

            success: false,
            message: "Customer Deleted Successfully"

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

    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer

};