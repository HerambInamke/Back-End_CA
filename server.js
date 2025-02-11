const express = require('express');
const app = express();
const port = 3000;
const signed = require('./signup');

app.get('/', (req, res) => {
  res.send('Ssup!');
});

app.post('/signup', signed.signup);

app.post('/signup', (req, res) => {
    res.send('User signup successful!');
});


app.listen(port, () => {
  console.log(`✅Server running at http://localhost:${port}`);

});