const axios = require('axios');

module.exports = async (req, res) => {
  const apiKey = process.env.API_KEY; // Ensure this is set in your Vercel project settings
  const { term, location, sort_by } = req.query;

  try {
    const { data } = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
      params: { term, location, sort_by },
      headers: {
        Authorization: `Bearer ${apiKey}`,
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
