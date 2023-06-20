// /api/search.js
const axios = require('axios');

module.exports = (req, res) => {
  const apiKey = process.env.API_KEY;
  const { term, location, sort_by } = req.query;

  axios({
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(error.response.status);
      res.send(error.response.data);
    });
};
