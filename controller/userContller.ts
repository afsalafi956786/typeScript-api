import express from 'express';
import bcrypt from 'bcrypt'
import bookModel from '../models/bookModels';


export async function userSignup(req:express.Request,res:express.Response){
    try{
        let {name,email,password}=req.body;
       let salt=await bcrypt.genSalt(10);
       let hashPass=await bcrypt.hash(String(password),salt);

      res.json({
        user:{name,email,password},
        hashPass:hashPass
      })
        
    }catch(err:any){
        console.log(err.message);
        
    }

}

export async function AddBooks(req:express.Request,res:express.Response){
    try{
        let {title,author,extras}=req.body;
        if(title && author && extras){
            await bookModel.create({
                title,
                author,
                extras,
            })
            res.json({author,title,extras})

        }else{
            res.json({status:'failed','message':'somthing went wrong!!'})
            
        }

    }catch(error:any){
        console.log(error.message);
        
    }
}

export async function updatebook(req:express.Request,res:express.Response){
    try{
     let bookId=req.query.id;
        let {title,author,extras}=req.body;
        await bookModel.findByIdAndUpdate(bookId,{
        title,
        author,
        extras,
    })
      res.json({status:'success','message':'successfuly updated..'})
    }catch(error:any){
        console.log(error.message);
        
    }
  
     
}

export async function deletebook(req:express.Request,res:express.Response){
  try{
   let bookId=req.params.id;
   console.log(bookId,'[[[[[');
  await  bookModel.findByIdAndDelete(bookId);
  
  
  res.json({status:'success','message':'book successfully deleted'})
  }catch(error:any){
    console.log(error.message);
    
  }
}