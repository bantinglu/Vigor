const express = require('express');
const path = require('path');

const app = express();

const decklist = require('./server/routes/decklist');

app.use(express.static(path.join(__dirname, 'dist/AoV')));
app.use('/decklist', decklist)

//all requests do to dist/index
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/AoV/index.html'))
})

const port = process.env.PORT || 4600

app.listen(port, (req, res)=>{
    console.log(`Running on port ${port}`);
});