import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true })

const Note = mongoose.model("Note", notesSchema);
export default Note;