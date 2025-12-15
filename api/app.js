const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const cors = require('cors')
const fileUpload = require('express-fileupload')

app.use(express.static(__dirname+'/assets'));
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/", require("./AllRoutes/AllRoute"));

app.listen(port, ()=>{
  console.log("Server running at port ", port);
})