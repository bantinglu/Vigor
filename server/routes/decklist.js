const express = require('express');
const router = express.Router();
const axios = require('axios');
const postAPI = 'https://jsonplaceholder.typicode.com';
//GET

router.get('/', (req, res)=>{
    posts = [{
            "Quantity": 4,
            "Name": "Primeval Titan"
        },
        {
            "Quantity": 4,
            "Name": "Amulet of Vigor"
        },
        {
            "Quantity": 4,
            "Name": "Anicent Stirrings"
    }];
    res.status(200).json(posts);
       
});

module.exports=router;