const express = require('express');

const router = express.Router();
const review = require('../../models/reviewmodel');


router.post('/post',async(req,res)=>{
try{
    const obj = new review(req.body);
    await obj.save()
    res.send("Data Saved")
}
catch(e){
res.json(e)
}
});


module.exports = router;