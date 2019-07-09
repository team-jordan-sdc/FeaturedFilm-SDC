const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/api/featured', (req, res) => {
  console.log(req.body);
  res.end()
});

app.post('/api/rate', (req, res) => {
  console.log(req.body);
  res.end();
});

app.post('/api/wishlist', (req, res) => {
  console.log('test wishlist');
  res.end();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
