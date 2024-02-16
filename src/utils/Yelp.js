const serverUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

const Yelp = {
  async search(term, location, sortBy) {
    // Note: Adjusted to remove the redundant `/api` if `serverUrl` is meant to include it for production
    const url = `${serverUrl}/api/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    console.log('Request URL:', url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Yelp API error: ${response.statusText}`);
      }
      const jsonResponse = await response.json();
      console.log('Yelp API response:', jsonResponse);

      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          url: business.url,
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error occurred during Yelp API call:', error);
      return [];
    }
  },
};

export default Yelp;
