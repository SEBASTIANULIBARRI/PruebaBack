const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();


const port = process.env.PORT||3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {res.sendFile(path.join(__dirname,'index.html'));});

app.listen(port, () => {
    console.log("/*"+path.join(__dirname,'index.html') +"*/"+ `Server running at ${port}/`);
  });