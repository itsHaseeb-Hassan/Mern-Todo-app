import express from "express";
import { createTodo } from "../controllers/todoController.js";
const todoRouter=express.Router()

todoRouter.post('/create',createTodo);

export default todoRouter