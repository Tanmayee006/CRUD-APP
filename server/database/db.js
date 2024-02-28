import mongoose from "mongoose";

const Connection =async(username,password) => {
    const URL= `mongodb+srv://${username}:${password}@crud-application.thfd3cd.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log('Database Connected');
    }catch(error){
        console.log('Error while connecting the database ',error);
    }
}
export default Connection;