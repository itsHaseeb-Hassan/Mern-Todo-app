import axios from 'axios';
import { store } from '../Redux/store';

const HOSTNAME = 'http://localhost:8002/api';

export const callPrivateApi = async (endpoint, method, data = {}) => {
    const token = store.getState().user.loginInfo?.accessToken;
    console.log('token in APIendPoint', token);

    const url = `${HOSTNAME}${endpoint}`;

    let configaxios = {
        method: method,
        url: url,
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            Authorization: `Bearer ${token}`,
        },
    };

    if (data.profileImage) {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        configaxios.headers['Content-Type'] = 'multipart/form-data';
        configaxios.data = formData;
    } else {
        if (method === 'POST' || method === 'PUT') {
            configaxios.headers['Content-Type'] = 'application/json';
            configaxios.data = JSON.stringify(data);
        } else if (method === 'GET' || method === 'DELETE') {
            configaxios.params = data;
        }
    }

    console.log('Making API request with config:', configaxios);

    try {
        const response = await axios(configaxios);
        console.log('API response:', response.data);
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};
