const express = require('express');
const app = express()
app.use(express.json())
const mongoo = require('./Services/DB_connection');
require('dotenv').config()
mongoo(process.env.db_url).then(()=>{





    


})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})