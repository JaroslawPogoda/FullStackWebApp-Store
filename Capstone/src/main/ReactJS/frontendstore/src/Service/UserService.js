
import axios from 'axios';

const USER_API_BASE_URL= "http://localhost:8080/api";
class UserService{

    getUserByEmail(email){
       return axios.get(USER_API_BASE_URL+`/user/${email}`);
    }

    register(user){
        return axios.post(USER_API_BASE_URL+"/register",user);
    }
    updateUser(user,email){
        return axios.put(USER_API_BASE_URL+"/user/"+email,user);
    }
    login(email, password){
        return axios.post(USER_API_BASE_URL+"/user/login/"+email,password)
    }
    deleteUser(email){
        return axios.delete(USER_API_BASE_URL+"/user/"+email);
    }
    updateCart(email,user){
        return axios.put(USER_API_BASE_URL+"/user/"+email+"/cart",user); 
    }

}

export default new UserService();