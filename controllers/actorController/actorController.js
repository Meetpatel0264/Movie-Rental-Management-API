const Actor = require("../../models/actorModel/actorModel");

const createActor = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;

        if (!firstName || !lastName) {

            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const actorExists = await Actor.findOne({
            firstName: firstName.trim(),
            lastName: lastName.trim()
        });

        if (actorExists) {
            return res.status(400).json({ success: false, message: "Actor already exists" });
        }

        const actor = await Actor.create({ firstname, lastName });
        return res.status(201).json({ success: true, message: "Actor Created Successfully", data: actor });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getAllActor = async (req, res) => {

    try {
        const actor = await Actor.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            total: actor.length,
            data: actor
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getSingleActor = async (req, res) => {
    try {
        const actor = await Actor.findById(req.params.id);
        if (!actor) {
            return res.status(404).json({
                success: false,
                message: "Actor Not Found"
            });
        }
        return res.status(200).json({
            success: true,
            data: actor
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateActor = async (req, res) => {

    try {
        const { firstName, lastName } = req.body;
        const actor = await Actor.findByIdAndUpdate(req.params.id,
            { firstName, lastName }, { new: true, runValidators: true }
        );

        if (!actor) {
            return res.status(404).json({
                success: false,
                message: "Actor Not Found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Actor Updated Successfully",
            data: actor
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteActor = async (req, res) => {

    try {
        const actor = await Actor.findByIdAndDelete(req.params.id);
        if (!actor) {
            return res.status(404).json({
                success: false,
                message: "Actor Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Actor Deleted Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    createActor,
    getAllActor,
    getSingleActor,
    updateActor,
    deleteActor

};