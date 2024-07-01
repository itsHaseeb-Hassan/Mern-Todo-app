import { callPrivateApi } from "../Apiendpoint";


export const loginUser=async (data)=>{
  console.log("data in loginUser",data)
  try {
    const response= await callPrivateApi("/users/login","POST",data)
    return response
  } catch (error) {
    return error;
  }
 
}

export const createUser= async (data)=>{
    try {
        const response= await callPrivateApi("/users/register","POST",data)
        return response
    } catch (error) {
        const err=error
        return err
    }
}
