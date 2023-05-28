import express from 'express';
const router:express.Router=express.Router();
import { userSignup,AddBooks ,updatebook,deletebook} from '../controller/userContller';


router.get('/signin',(req:express.Request,res:express.Response)=>{
    res.send('<h2 style="color:blue">This is the userPage</h2>')
})

router.post('/signup',userSignup);
router.post('/addBook',AddBooks);
router.patch('/update',updatebook);
router.delete('/delete/:id',deletebook);



export default router;