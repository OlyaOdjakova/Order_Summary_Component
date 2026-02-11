import React from "react";
import styles from "./cardContent.module.css";

const CardContent = () => {
  return (
    <div>
      <h2 className={styles.headerStyle}>Order summary</h2>
      <p className={styles.bodyStyle}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
    </div>
  );
};

export default CardContent;
