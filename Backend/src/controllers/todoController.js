import Todo from "../models/todoModel.js";
import createHttpError from "http-errors";
const createTodo = async (req, res, next) => {
    const { task } = req.body;

    // validation
try {
    if(!task){
        const error = createHttpError(400, "Task is required");
        return next(res.json({ error }));
    }
} catch (error) {
    const err = createHttpError(500, "Internal Server Error");
    return next(res.json({ err }));
}
// todo exist
let todoExist;
try {
    todoExist = await Todo.findOne({ task });
    if (todoExist) {
        const error = createHttpError(400, "Todo already exist");
        return next(res.json({ error }));
    }
} catch (error) {
    const err = createHttpError(500, "Internal Server Error");
    return next(res.json({ err }));
}
// Create Todo
try {
    const newTodo = await Todo.create({ task });
    res.status(201).json({ newTodo });
} catch (error) {
    const err = createHttpError(500, "Internal Server Error");
    return next(res.json({ err }));
}
    }

    export {createTodo}