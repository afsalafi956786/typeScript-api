import mongoose from "mongoose";


async function dbConnect(data:string){
    try{
    await mongoose.connect(data,{dbName:'practical'});
    console.log('database connected successfully');
    }catch(error:any){
        console.log(error.message);
        
    }

}

export default dbConnect;