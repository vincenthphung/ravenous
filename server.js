require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

const apiKey = process.env.API_KEY; 

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle the requests for the individual files like main.js, main.css, etc.
app.get(/^\/(static|favicon\.ico|manifest\.json|logo192\.png)/, (req, res) => {
  const filePath = path.join(__dirname, 'build', req.url);
  res.sendFile(filePath);
});

app.get('/search', (req, res) => {
  axios({
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?term=${req.query.term}&location=${req.query.location}&sort_by=${req.query.sort_by}`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
