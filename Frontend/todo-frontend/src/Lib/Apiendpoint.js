const HOSTNAME = "http://localhost:8002/api";
import axios from "axios";
import { store } from "../Redux/store";

export const callPrivateApi = (endpoint, method, data = {}) => {
    const token = store.getState().user.loginInfo;
    console.log("Token:", token);

    // Construct URL for GET requests to include userId in query params
    let url = `${HOSTNAME}${endpoint}`;
    if (method === "GET" && data) {
        const queryParams = new URLSearchParams(data).toString();
        url = `${url}?${queryParams}`;
    }

    const configaxios = {
        method: method,
        url: url,
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-headers": "*",
            token,
        },
    };

    // Add data to request body if it's not a GET request
    if (method !== "GET") {
        configaxios.data = data;
    }

    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.error("API call error:", error);
                reject(error);
            });
    });
};
