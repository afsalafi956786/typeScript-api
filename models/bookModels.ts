import mongoose, { Schema } from "mongoose";
import { Document } from "mongoose";

interface Ibooks extends Document{
    title:string,
    author:string,
    extras:string,
}


let bookSchema:Schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    author:{
        type:String,
        required:true,
    },
    extras:{
        type:String,
        required:true,
    }

},{
    timestamps:true,
})

let bookModel=mongoose.model<Ibooks>('books',bookSchema);
export default bookModel;