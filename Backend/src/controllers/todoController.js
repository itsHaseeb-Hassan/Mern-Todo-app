import Todo from "../models/todoModel.js";
import createHttpError from "http-errors";

const createTodo = async (req, res, next) => {
    const { task, userId } = req.body;


    // Validation
    if (!task || !userId) {
        const error = createHttpError(400, "All fields are required");
        return next(res.json({ error }));
    }

    // Check if the todo already exists for the given user
    let todoExist;
    try {
        todoExist = await Todo.findOne({ userId, task });
        if (todoExist) {
            const error = createHttpError(400, "Todo already exists for this user");
            return next(res.json({ error }));
        }
    } catch (error) {
        const err = createHttpError(500, "Internal Server Error");
        return next(res.json({ err }));
    }

    // Create Todo
    let newTodo;
    try {
         newTodo = new Todo({
            userId,
            task
        });
        console.log(newTodo)
        const savedTodo = await newTodo.save();
        res.status(201).json({ savedTodo });
    } catch (error) {
        const err = createHttpError(500, "Internal Server Error hsdjs");
        return next(res.json({ err }));
    }
};
    const getAllTodos = async (req, res, next) => {
        const {userId} = req.body; // Get the userId from the authenticated user
        console.log(userId)
        let todos;
        try {
            todos = await Todo.find({ userId }); // Find todos by userId
            res.status(200).json({ todos });
        } catch (error) {
            const err = createHttpError(500, "Internal Server Error");
            return next(err);
        }
    };
const updateTodo = async (req, res, next) => {
    const { id, task } = req.body;

    // Validation
    if (!id || !task) {
        const error = createHttpError(400, "All fields are required");
        return next(res.json({ error }));
    }

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { task } , { new: true });
        console.log(updatedTodo)
        res.status(200).json({ updatedTodo });
    } catch (error) {
        const err = createHttpError(500, "Internal Server Error");
        return next(res.json({ err }));
    }
};

const deleteTodo = async (req, res, next) => {
    const { id } = req.body;
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.status(200).json({ deletedTodo });
    } catch (error) {
        const err = createHttpError(500, "Internal Server Error");
        return next(res.json({ err }));
    }
};

export { createTodo ,getAllTodos ,updateTodo,deleteTodo};

