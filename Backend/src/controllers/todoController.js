import Todo from '../models/todoModel.js';
import createHttpError from 'http-errors';

const createTodo = async (req, res, next) => {
    const { task, userId } = req.body;
    if (!task || !userId) {
        const error = createHttpError(400, 'All fields are required');
        return next(res.json({ error }));
    }
    try {
        const todoExist = await Todo.findOne({ userId, task });
        if (todoExist) {
            const error = createHttpError(400, 'Todo already exists for this user');
            return next(res.json({ error }));
        }
        const newTodo = new Todo({
            userId,
            task,
        });
        const savedTodo = await newTodo.save();
        res.status(201).json({ savedTodo });
    } catch (error) {
        const err = createHttpError(500, 'Internal Server Error');
        return next(res.json({ err }));
    }
};

const getAllTodos = async (req, res, next) => {
    const { userId } = req.query;
    try {
        const todos = await Todo.find({ userId });
        res.status(200).json({ todos });
    } catch (error) {
        const err = createHttpError(500, 'Internal Server Error');
        return next(err);
    }
};

const updateTodo = async (req, res, next) => {
    const { id, task } = req.body;
    if (!id || !task) {
        const error = createHttpError(400, 'All fields are required');
        return next(res.json({ error }));
    }
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { task }, { new: true });
        res.status(200).json({ updatedTodo });
    } catch (error) {
        const err = createHttpError(500, 'Internal Server Error');
        return next(res.json({ err }));
    }
};

const deleteTodo = async (req, res, next) => {
    const { id } = req.query;
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully', deletedTodo });
    } catch (error) {
        const err = createHttpError(500, 'Internal Server Error');
        return next(err);
    }
};

export { createTodo, getAllTodos, updateTodo, deleteTodo };
