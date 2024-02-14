const apiKey = process.env.REACT_APP_API_KEY; // Define the API key

const serverUrl = process.env.NODE_ENV === 'production' ? 'https://api.yelp.com' : '/api';

const Yelp = {
  search(term, location, sortBy) {
    const url = `${serverUrl}/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${sortBy}`;
    const headers = process.env.NODE_ENV === 'production' ? { Authorization: `Bearer ${apiKey}` } : {};

    console.log('Request URL:', url); // Debugging: Log the request URL

    return fetch(url, { method: 'GET', headers })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Yelp API error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(jsonResponse => {
        console.log('Yelp API response:', jsonResponse); // Debugging: Log the API response

        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0]?.title,
            rating: business.rating,
            reviewCount: business.review_count,
            url: business.url,
          }));
        } else {
          return [];
        }
      })
      .catch(error => {
        console.error('Error occurred during Yelp API call:', error); // Error handling
        return [];
      });
  },
};

export default Yelp;
