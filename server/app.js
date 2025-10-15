const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/ping',(req,res)=>{

    return res.send('everything fine');
})
app.listen(2000,()=>{

    console.log("servver running on port 2000");
    
})