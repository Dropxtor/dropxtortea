const express = require('express');
const app = express();
const port = 22;


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening at http://37.221.127.252:${22}`)
});