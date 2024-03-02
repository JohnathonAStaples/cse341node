const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Johnathon Staples');
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.poirt || 3000));