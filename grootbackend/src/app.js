const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("../src/db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(cors());
app.use(express.static(static_path));
app.get("/",(req,res) => {
    res.send("hello from the ggr")

});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

app.use(express.json())
app.use('/api/contact',require('../src/db/Routes/contact'))
app.use('/api/review',require('../src/db/Routes/review'))