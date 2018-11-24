const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(  express.static( path.join(__dirname, 'public') ) );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.listen(port, () => console.log(`Listening on Port ${port}`));