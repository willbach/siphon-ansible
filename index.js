const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json(), bodyParser.urlencoded({extended: false}));

app.post('/test', (req, res) => {
  console.log('we have a request');
  console.log(req.body);
  res.end()
});

app.listen(3000, () => console.log('listening on port 3000'));
