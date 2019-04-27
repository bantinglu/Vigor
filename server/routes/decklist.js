const express = require('express');
const router = express.Router();
const axios = require('axios');
const postAPI = 'https://jsonplaceholder.typicode.com';
//GET

router.get('/', (req, res)=>{
    axios.get(`${postAPI}/posts`).then(posts=>{
        res.status(200).json(posts.data);
        //res.sendStatus(200);
    }).catch(error=>{
        res.status(500).send(error);
    })
});

module.exports=router;