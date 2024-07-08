import { callPrivateApi } from "../Apiendpoint";

export const getTodos = async (userId) => {
    try {
        console.log("Fetching todos for user:", userId);

        // Call the API with userId as query parameter for GET request
        const response = await callPrivateApi("/todos/getall", "GET", { userId });

        console.log("Response:", response);
        return response;
    } catch (error) {
        console.error("Error fetching todos:", error);
        return error;
    }
};


export const createTodo = async (data) => {
    console.log("Data in createTodo:", data);
    const userId=data.userId;
    console.log("user id is",userId)
     const task=data.task
    console.log("task is",task)

    try {
        const response = await callPrivateApi("/todos/create", "POST",{userId,task} );
        return response;
    } catch (error) {
        return error;
    }
}

export const updateTodo = async (data) => {
    console.log("Data in updateTodo todoApi:", data);
    try {
        const response = await callPrivateApi(`/todos/update`, "PUT", data);
        return response;
    } catch (error) {
        return error;
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await callPrivateApi('/todos/delete', 'DELETE', { id });
        return response;
    } catch (error) {
        return error;
    }
};
export const completeTodo = async (id) => {
    console.log("ID in completeTodo:", id);
    try {
        const response = await callPrivateApi('/todos/complete', 'POST', {id:id} );
        return response;
    } catch (error) {
        return error;
    }
}