import Note from '../models/note.model.js'

//protected
const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;

        const user = req.user;

        if (!title || !description) {
            return res.status(400).json({ success: true, message: "Title or description required!" });
        }

        const note = await Note.create({
            title,
            description,
            user
        })

        if (!note) {
            return res.status(400).json({ success: false, message: "Note not created Error!" });
        }

        return res.status(200).json({ success: true, message: "Note created successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Some Error while creating note!" });
    }
}

//protected
const getAllNotesByUser = async (req, res) => {
    try {
        const user = req.user;

        const notes = await Note.find({ user: user._id })

        if (notes.length < 1) {
            return res.status(400).json({ success: false, message: "Notes not found!" });
        }

        return res.status(200).json({ success: true, message: "Found notes", notes });


    } catch (error) {
        console.log("Error getting all notes of user:", error);
        return res.status(500).json({ success: false, message: "Error while getting notes!" });
    }
}

const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await Note.findById(id);

        if (!note) {
            return res.status(400).json({ success: false, message: "Note not found!" });
        }

        return res.status(200).json({ success: true, message: "Found Note", note });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Error while finding Note", });
    }
}

const updateNote = async (req, res) => {
    try {

        const { id, title, description } = req.body;

        const note = await Note.findById(id);

        if (!note) {
            return res.status(400).json({ success: false, message: "Note not found!" });
        }

        if (title) {
            note.title = title;
        }

        if (description) {
            note.description = description;
        }

        const updatedNote = await note.save({ validateBeforeSave: false });

        if (updateNote) {
            return res.status(200).json({ success: true, message: "Note Updated succesfully", updatedNote });
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Error while updating note!" });

    }
}

const deleteNote = async (req, res) => {
    try {

        const { id } = req.params;
        const deletedNote = await Note.deleteOne({ _id: id });
        console.log(deletedNote);

        if (!deleteNote) {
            return res.status(400).json({ success: false, message: "Note not deleted!" })
        }

        return res.status(200).json({ success: true, message: "Note deleted succesfully" })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Error while deleting note!" })
    }
}

export { createNote, getAllNotesByUser, getNoteById, updateNote, deleteNote };