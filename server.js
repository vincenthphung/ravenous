require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

const apiKey = process.env.API_KEY; 


app.use(express.static(path.join(__dirname, 'build')));

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

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
});
