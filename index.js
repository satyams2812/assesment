const express = require('express');
const app = express();
const router = require('./routes/api/question_api')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/',router)

app.listen(port,()=>{
    console.log('server has started')
})