import axios from "axios";
import { BASE_URL } from "./APIConstants";

export async function login(credentials){
    
    //const response=await axios.post(`${BASE_URL}/admin/login`,credentials);
    const response=await axios.post(`${BASE_URL}/users/signin`,credentials);
    return response.data;
}