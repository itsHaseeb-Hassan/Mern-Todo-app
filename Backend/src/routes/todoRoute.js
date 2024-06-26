import express from "express";
import { authMidelware } from "../midelwares/authMidelware.js";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todoController.js";
const todoRouter=express.Router()

todoRouter.post('/create', authMidelware,createTodo);
todoRouter.get('/getall',getAllTodos);
todoRouter.put('/update', authMidelware,updateTodo);
todoRouter.delete('/delete', authMidelware,deleteTodo)

export default todoRouter