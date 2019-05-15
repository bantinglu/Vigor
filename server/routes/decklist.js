const express = require('express');
const router = express.Router();
const axios = require('axios');
const postAPI = 'https://jsonplaceholder.typicode.com';
var fs = require("fs");
//GET

router.get('/', (req, res)=>{
    posts = [];

    fs.readFile('./server/routes/Amulit.txt', function(err, data) {
        if(err) throw err;
        var array = data.toString().split("\n");
        for(i in array) {
            var quant = array[i].substr(0,array[i].indexOf(' ')); 
            var name = array[i].substr(array[i].indexOf(' ')+1);
            var obj = {
                "Quantity" : quant,
                "Name" : name
            }
            posts.push(obj);
        }

        res.status(200).json(posts);
    });
       
});

module.exports=router;