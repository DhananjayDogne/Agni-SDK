import { config } from 'dotenv'
import axios from 'axios'
import { token_path_login } from '../routes.js'

config();

const { BASE_URL } = process.env;

export const secretLogin = async ({ email, password }) => {
    if(email =="" || password ==""){
        return "Please fill Email And Password Correctly...";
    }else{
        const {data}  = await axios.post(`${BASE_URL}${token_path_login}`, {
            "email": email,
            "password": password,
        }).catch(err => err)
        if(data){
                  return data.access
             
        }else{
            return "Wrong details ! Please fill correctly" ;
        }
    }
   
   
};