import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h2>Contact Us</h2><p>8111111222</p>');
});

app.get('/about', (req, res) => {
  res.send('<h3>About Us</h3>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});