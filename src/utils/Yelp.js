const serverUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000';

const Yelp = {
  search(term, location, sortBy) {
    const url = `${serverUrl}/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    console.log('Request URL:', url); // add this line

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Yelp API error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
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
      })
      .catch((error) => {
        console.error('Error occurred during Yelp API call:', error); // modify this line
        return [];
      });
  },
};

export default Yelp;
