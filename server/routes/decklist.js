const express = require('express');
const router = express.Router();
//const axios = require('axios');
//const postAPI = 'https://jsonplaceholder.typicode.com';
var fs = require("fs");
//GET
const mainKarnPromise = () =>{
    console.log("promise1")
    return new Promise((resolve, reject)=>{
        fs.readFile('./server/routes/Amulet_karn_main.txt', function(err, data) {
            if(err) throw err;
            var array = data.toString().split("\n");
            for(i in array) {
                var quant = array[i].substr(0,array[i].indexOf(' ')); 
                var name = array[i].substr(array[i].indexOf(' ')+1);
                var obj = {
                    "Quantity" : quant,
                    "Name" : name
                }
                karn_main.push(obj);
            }
            resolve();
        });
        
    });
};

const mainWhitePromise = () =>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./server/routes/Amulet_white_main.txt', function(err, data) {
            if(err) throw err;
            var array = data.toString().split("\n");
            for(i in array) {
                var quant = array[i].substr(0,array[i].indexOf(' ')); 
                var name = array[i].substr(array[i].indexOf(' ')+1);
                var obj = {
                    "Quantity" : quant,
                    "Name" : name
                }
                white_main.push(obj);
            }
            resolve();
        });
        
    });
};


const sideKarnPromise = () =>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./server/routes/Sideboard_karn.txt', function(err, data) {
            if(err) throw err;
            var array = data.toString().split("\n");
            for(i in array) {
                var quant = array[i].substr(0,array[i].indexOf(' ')); 
                var name = array[i].substr(array[i].indexOf(' ')+1);
                var obj = {
                    "Quantity" : quant,
                    "Name" : name
                }
                Karn_side.push(obj);
            }
            resolve();
        });
        
    });
};

const sideWhitePromise = () =>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./server/routes/Sideboard_white.txt', function(err, data) {
            if(err) throw err;
            var array = data.toString().split("\n");
            for(i in array) {
                var quant = array[i].substr(0,array[i].indexOf(' ')); 
                var name = array[i].substr(array[i].indexOf(' ')+1);
                var obj = {
                    "Quantity" : quant,
                    "Name" : name
                }
                white_side.push(obj);
            }
            resolve();
        });

       
    });
};

router.get('/', (req, res)=>{
    karn_main = [];
    Karn_side =  [];
    white_main =  [];
    white_side =  [];
    deck = [];


    /*mainPromise().then(() =>{
        sidePromise().then(()=>{
            deck = {"karn": {
                        "main" : karn_main,
                        "side" : Karn_side
                    },
                    "white":{
                        "main" : white_main,
                        "side" : white_side
                    }
            }
            console.log(deck);
            res.status(200).json(deck);  
        });
    });*/
    mainKarnPromise().then(mainWhitePromise).then(sideWhitePromise).then(sideKarnPromise).then(()=>{
        deck = {"karn": {
            "main" : karn_main,
            "side" : Karn_side
        },
        "white":{
            "main" : white_main,
            "side" : white_side
                }
        }
        console.log(deck);
        res.status(200).json(deck);  
    });
   /* Promise.all([mainKarnPromise, mainWhitePromise, sideWhitePromise, sideKarnPromise]).then(()=>{
        deck = {"karn": {
                    "main" : karn_main,
                    "side" : Karn_side
                },
                "white":{
                    "main" : white_main,
                    "side" : white_side
                }
        }
        console.log(deck);
        res.status(200).json(deck);  
    });*/

});

module.exports=router;