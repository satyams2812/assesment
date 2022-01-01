const question = require('../../controller/Question')
const express = require('express');
const router = express.Router();


 router.post('/question',question.questionpaper);

 
module.exports = router;  
