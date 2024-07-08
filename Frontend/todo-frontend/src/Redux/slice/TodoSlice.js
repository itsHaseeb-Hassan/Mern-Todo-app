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
        
        deleteTodo: (state, action) => {
            state.todos = state.todos.todos.filter(todo => todo._id !== action.payload);
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        completeTodos: (state, action) => {
            state.todos = state.todos.todos.map((todo) => {
                if (todo._id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.todos.map((todo) => {
                if (todo._id === action.payload._id) {
                    return action.payload;
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, setTodos, updateTodo,completeTodos } = todoSlice.actions;

export default todoSlice.reducer;
