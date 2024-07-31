import express from 'express'
import { createNote, deleteNote, getAllNotesByUser, getNoteById, updateNote } from '../controllers/note.controller.js';
import { authenticatedUser } from '../middlewares/auth.middlware.js';

//    note/......

const noteRouter = express.Router();


noteRouter.route("/addNote").post(authenticatedUser, createNote);
noteRouter.route("/getNotes").post(authenticatedUser, getAllNotesByUser);
noteRouter.route("/getNote/:id").post(authenticatedUser, getNoteById);
noteRouter.route("/updateNote").post(authenticatedUser, updateNote);
noteRouter.route("/deleteNote/:id").delete(authenticatedUser, deleteNote);

export default noteRouter;