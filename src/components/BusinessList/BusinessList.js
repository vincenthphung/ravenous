import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className={styles.BusinessList}>
      {businesses.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
};

export default BusinessList;
