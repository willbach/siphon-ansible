const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json(), bodyParser.urlencoded());

app.post('/', (req, res) => {
  console.log(req.body);
  res.end()
}

app.listen(3000, () => console.log('listening on port 3000));
