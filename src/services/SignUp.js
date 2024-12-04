import axios from "axios";
import { BASE_URL } from "./APIConstants";

export async function signup(credentials){
    //const response=await axios.post(`${BASE_URL}/admin/login`,credentials);
    const response=await axios.post(`${BASE_URL}/users/signup`,credentials);
    return response.data;
}