import axios from "axios";
import { store } from "../Redux/store";

const HOSTNAME = "http://localhost:8002/api";

export const callPrivateApi = (endpoint, method, data = {}) => {
    const token = store.getState().user.loginInfo;
    console.log("Token:", token);

    let url = `${HOSTNAME}${endpoint}`;
    if ((method === 'GET' || method === 'DELETE') && data) {
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

    console.log("configaxios:", configaxios);

    if (method !== "GET" && method !== "DELETE") {
        configaxios.data = data;
    }

    console.log("Making API request to URL:", url);

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
