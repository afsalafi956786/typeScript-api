import express from 'express';
const app:express.Application=express();
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter'
import dbConnect from './connection/dbConnect';
import dotevn from 'dotenv';
dotevn.config();


const port:number=4000;
const data_connction=process.env.DATA_CONNECTION;
if(data_connction !==undefined){
    dbConnect(data_connction)
}



app.get('/',(req:express.Request,res:express.Response)=>{
    res.send('<h3 style="color:red">Welcome to our brand new sereis</h3>')
}) 

app.use(express.json())
app.use('/api',apiRouter)
app.use('/user',userRouter)


app.listen(port,()=>{
    console.log(`server is connceted to the port is ${port}`)
    
})
