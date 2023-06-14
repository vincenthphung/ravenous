import React from "react";
import styles from "./Business.module.css";

const Business = ({ business }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${business.address}+${business.city}+${business.state}+${business.zipCode}`;

  return (
    <div className={styles.Business}>
      <a href={business.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageContainer}>
          <img src={business.imageSrc} alt="" />
        </div>
      </a>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </a>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
