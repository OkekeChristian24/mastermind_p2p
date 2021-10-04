const express=require('express');
//const mongoose=require('mongoose');
const path=require('path');

const app=express();
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("User sent a request");
    //res.send("Hello");
    //res.sendFile(path.join(__dirname+'/index.html'));
})



app.use(express.static(__dirname));
app.listen(8000);
