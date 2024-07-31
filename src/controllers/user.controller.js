import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ success: false, message: "Not provided Email or password or name!" })
        }

        if (password.length < 5) {
            return res.status(400).json({ success: false, message: "Password should contains minimum 5 characters!" })
        }

        const user = await User.create({
            email,
            password,
            name
        })

        if (!user) {
            return res.status(400).json({ success: false, message: "User registration failed!" })
        }

        return res.status(200).json({ success: true, message: "User registered successfully" })
    } catch (error) {
        console.log(error.code);
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: "Account already exists!" });
        }
        return res.status(400).json({ success: false, message: "Error while registering user!" })
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Required Email/password" });
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ success: false, message: "Incorrect Email/password!" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Email or Password Incorrect!" })
        }

        const token = user.generateToken();

        user.password = undefined;

        return res.status(200).json({ success: true, token, user, message: "User login success" })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Error while user login!" });
    }
}

const verifyToken = async (req, res) => {
    try {

        const token = req.header("Authorization").replace("Bearer ", "");
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        if (!decodedToken) {
            return res.status(400).json({ success: false, message: "Unauthorized user!" });
        }

        if (decodedToken) {
            return res.status(200).json({ success: true, message: "Verified User!" });
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Error while user verification!" });
    }
}

export { userRegister, loginUser, verifyToken };