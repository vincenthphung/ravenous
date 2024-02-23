const axios = require('axios');

module.exports = async (req, res) => {
  // Set CORS headers to allow all domains or specify your application's domain
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust accordingly for production
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Optional: Handle pre-flight requests for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const apikey = process.env.REACT_APP_API_KEY; // Ensure this is set in your Vercel project settings
  const { term, location, sort_by } = req.query;

  try {
    const { data } = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
      params: { term, location, sort_by },
      headers: {
        Authorization: `Bearer ${apikey}`,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    if (error.response) {
      // Forward Yelp API's error response
      res.status(error.response.status).json(error.response.data);
    } else {
      // Handle network or other errors
      res.status(500).json({ message: 'An error occurred while contacting the Yelp API' });
    }
  }
};
