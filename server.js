const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const apiCall = require('request');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', function (req, res) {
  
  const getRandomInt = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }
  const makeURL = () => {
    const APIArr = ["uSjGv0JYaZo8bQ2wwbl0w4mGFz0G1X26", "DoPQtFzzElCIKOk84xbWGWK4yfttinQm", "LCZmYCMwLy17f5iST3Yff2828YYtKTMY", "2g40lIV3jJvMmt0notElhrqJ8H2pBtH0", "ydn6IfUYhjn9cr3l6rFgKkNHTRTTgJF7"];
    const randomIdx = getRandomInt(0,4);
    return `&sort=unitPrice:asc&limit=1&wordType=front&apikey=${APIArr[randomIdx]}`;
  }
  
  const url = req.query.url + makeURL()
  apiCall(encodeURI(url)).pipe(res);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);