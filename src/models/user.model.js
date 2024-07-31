import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        maxLength: 20
    },
    mobile: {
        type: String,
        minLength: 10
    },
    address: {
        city: {
            type: String,
            minLength: 20
        },
        state: {
            type: String,
            minLength: 20
        },
        country: {
            type: String,
            minLength: 20
        },
        pincode: {
            type: String,
            minLength: 15
        }
    }
}, { timestamps: true })

userSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id, email: this.email },
        process.env.SECRET_KEY,
        { expiresIn: process.env.TOKEN_EXPIRE }
    )

    return token;
}

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = this.password = await bcrypt.hash(this.password, 10);
        }
    } catch (error) {
        next();
    }
})

const User = mongoose.model("User", userSchema);

export default User;
