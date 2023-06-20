const axios = require('axios');

module.exports = (req, res) => {
  const apiKey = process.env.API_KEY;
  const { term, location, sort_by } = req.query;

  console.log('API Key:', apiKey); // add this line
  console.log('Request query params:', req.query); // and this line

  axios({
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((response) => {
      console.log('Yelp API response:', response.data); // and this line
      res.send(response.data);
    })
    .catch((error) => {
      console.log('Yelp API error:', error); // and this line
      res.status(error.response.status);
      res.send(error.response.data);
    });
};
