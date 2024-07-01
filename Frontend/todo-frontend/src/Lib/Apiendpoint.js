import axios from "axios";
import { store } from "../Redux/store";

const HOSTNAME = "http://localhost:8002/api";

export const callPrivateApi = async (endpoint, method, data = {}) => {
    const token = store.getState().user.loginInfo?.accessToken;
    console.log("token in APIendPoint", token);

    let url = `${HOSTNAME}${endpoint}`;
    if ((method === 'GET' || method === 'DELETE' || method === 'POST') && data) {
        const queryParams = new URLSearchParams(data).toString();
        url = `${url}?${queryParams}`;
    }

    const configaxios = {
        method: method,
        url: url,
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            Authorization: `Bearer ${token}`,
        },
    };

    if (method !== "GET" && method !== "DELETE" && method !== "POST") {
        configaxios.data = data;
    }

    console.log("Making API request with config:", configaxios);

    try {
        const response = await axios(configaxios);
        return response.data;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};
