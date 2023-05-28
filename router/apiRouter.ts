import express from 'express'
const router:express.Router=express.Router();


router.get('/',(req:express.Request,res:express.Response)=>{
     res.send('<h1>Welcom to the apis</h1>')
     
}) 




export default  router;