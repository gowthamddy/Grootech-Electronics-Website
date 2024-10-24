const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/groot", {

}).then(( ) =>{
    console.log(`connection sucessful`);
}).catch((e) => {
    console.log(`no connection`);
    console.log(e);
})