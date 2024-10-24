const express = require('express');

const router = express.Router();
const Contact = require('../../models/Contactmodel');


router.post('/send',async(req,res)=>{
try{
    const obj = new Contact(req.body);
    await obj.save()
    res.send("Data Saved")
}
catch(e){
res.json(e)
}
});


module.exports = router;