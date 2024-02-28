//javascript request function is deprecated it was used to call api
//now fetch function is used  which is a part of javascript ES6
//Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data.
//axios is post api
//axios({ method: 'post', url: '/login', data: { firstName: 'Finn', lastName: 'Williams' } })
import axios from "axios";

const URL = 'http://localhost:8000';
export const addUser= async(data)=>{
        try{
            return await axios.post(`${URL}/add`,data)
        }catch(error){
            console.log("Error while Calling add user api",error);
        }
}


//api calls are asynchronous request to handle await is used
//earlier .then() was used
//to use await function must be async