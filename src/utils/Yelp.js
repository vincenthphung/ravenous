const Yelp = {
  getFetchUrl(term, location, sortBy) {
    return `https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${encodeURIComponent(sortBy)}`;
  },

  async search(term, location, sortBy) {
    try {
      const response = await fetch(this.getFetchUrl(term, location, sortBy), {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();

      if (jsonResponse.businesses && jsonResponse.businesses.length > 0) {
        return jsonResponse.businesses.map(business => ({
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
        }));
      } else {
        throw new Error('No businesses found');
      }
    } catch (error) {
      console.error(error);
      return null;  // or handle it in another appropriate way
    }
  },
};

export default Yelp;
