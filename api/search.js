const axios = require('axios');

module.exports = (req, res) => {
  const apiKey = process.env.REACT_APP_API_KEY; // Make sure this environment variable is correctly set in your deployment
  const { term, location, sort_by } = req.query;

  console.log('API Key:', apiKey); // Debugging: Log the API Key
  console.log('Request query params:', req.query); // Debugging: Log the request query parameters

  axios({
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params: { // Use the params object for query parameters
      term: term,
      location: location,
      sort_by: sort_by,
    },
  })
  .then((response) => {
    console.log('Yelp API response:', response.data); // Debugging: Log Yelp API response
    res.send(response.data);
  })
  .catch((error) => {
    console.log('Yelp API error:', error); // Debugging: Log any error from the Yelp API
    if (error.response) {
      // Forward Yelp API's error response
      res.status(error.response.status).send(error.response.data);
    } else {
      // Handle network or other errors not directly returned from Yelp's API
      res.status(500).send({ message: 'An error occurred while contacting the Yelp API' });
    }
  });
};
