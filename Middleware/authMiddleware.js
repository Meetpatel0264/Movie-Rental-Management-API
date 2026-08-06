const jwt = require("jsonwebtoken");
const User = require("../models/userModel/userModel");


const protect = async (req, res, next) => {
    try {

        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {

            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET || "mySecretKey"
            );

            const user = await User.findById(decoded.id).select("-password");

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "User not found"
                });
            }

            req.user = user;

            next();

        } else {

            return res.status(401).json({
                success: false,
                message: "No Token Provided"
            });

        }

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or Expired Token"
        });

    }
};

const authorize = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {

            return res.status(403).json({

                success: false,
                message: "Access Denied"

            });

        }

        next();

    };

};

module.exports = {
    protect,
    authorize
};