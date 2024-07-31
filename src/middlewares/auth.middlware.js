import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const authenticatedUser = async (req, res, next) => {
    try {
        const token = req?.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(400).json({ success: false, message: "Unauthorized access token not available!" })
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decodedToken._id);

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found!" });
        }

        if (user) {
            req.user = user;
            next();
        }

    } catch (error) {
        console.log("Error auth middleware: ", error);
        return res.status(500).json({ success: false, message: "Error while authenticating user!" })
    }
}

export { authenticatedUser };