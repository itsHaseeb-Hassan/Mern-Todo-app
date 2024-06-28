const HOSTNAME="http://localhost:8002/api"
import axios from "axios"
import { store } from "../Redux/store";

export const callPrivateApi=(endpoint,method,data)=>{
    const token = store.getState().user.loginInfo
    console.log(token)
    const configaxios={
        method:method,
        url:`${HOSTNAME}${endpoint}`,
        data:data,
        headers:{
            Accept:"application/json",
            "Access-Control-Allow-Origin": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-headers": "*",
            token,
        }
    };
    return new Promise((resolve,reject)=>{
        axios(configaxios)
        .then((response)=>{
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}