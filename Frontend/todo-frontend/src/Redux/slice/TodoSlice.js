import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("Action payload:", action.payload);
            state.todos.todos.push(action.payload);
        },
        setTodos: (state, action) => {
            state.todos = action.payload;d
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo._id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo._id === action.payload._id) {
                    return action.payload;
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, setTodos, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
