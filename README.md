
<p align="center">
  <img src="https://icon-library.com/images/food-icon/food-icon-9.jpg" width="100" height="100" alt="Ravenous Logo"/>
</p>

<h1 align="center">Ravenous 🍔</h1>

<p align="center">
  Discover the best places to eat, right at your fingertips.
</p>

<p align="center">
   <a href="https://ravenouseats.vercel.app/">View Demo</a>
</p>

## Overview 🔍

Ravenous is a Yelp-inspired restaurant search app, providing an intuitive interface to discover the best dining locations in your area. It uses Yelp's API to fetch and display the most relevant restaurant data according to user's search query.

### Features

- **Location and Keyword based search:** Ravenous allows you to search for restaurants based on specific keywords and locations.
- **Comprehensive Information:** For each restaurant, the app provides detailed information including ratings, review counts, and price levels.
- **Sort Results:** You can sort the search results based on "Best Match", "Highest Rated", or "Most Reviewed".
- **Clickable Addresses:** Restaurant addresses are clickable and open in Google Maps in a new tab.
- **Clickable Images:** Images are clickable and open the business' website in a new tab.
- **Automatic Re-query:** The list of restaurants automatically updates when a different sorting option is selected.
- **Search on Enter:** Allows search by pressing the "Enter" key, providing a smoother user experience.

## Getting Started 🚀

### Prerequisites

You will need npm installed on your system.

### Installation

1. Clone the repository
   ```
   git clone https://github.com/vincenthphung/ravenous.git
   ```
2. Install NPM packages
   ```
   npm install
   ```

### Usage

To start the server, run the following command in your terminal:

   ```
   npm start
   ```

## Built With 🛠️

<p align="left">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/Cors-CC202D?style=for-the-badge&logo=corsair&logoColor=white" />
<img src="https://img.shields.io/badge/Yelp-000000?style=for-the-badge&logo=yelp&logoColor=white" />
</p>

## Environment Variables 🌍

Create a `.env` file at the root of the project directory and insert your Yelp API key:

```bash
API_KEY=Your_Yelp_API_Key_Here
```
_**Note:** Ensure your `.env` file is added to your `.gitignore` file to prevent exposing your sensitive data._

## Deploying 🚀

Deployment-ready via [Vercel](https://vercel.com/docs).

## License 📜

This project is licensed under the MIT License.

## Contributing 🤝

Contributions, issues, and feature

 requests are welcome! Check out the [issues page](https://github.com/vincenthphung/ravenous/issues).

Remember to replace `Your_Yelp_API_Key_Here` with your actual Yelp API key.
