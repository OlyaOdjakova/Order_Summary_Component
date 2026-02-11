import React from "react";
import iconimage from "../../images/icon-music.svg";
import styles from "./cardBody.module.css";

const AnnualPlanCard = () => {
  return (
    <div className={styles.annualPlanCardStyle}>
      <div className={styles.annualPlanStyle}>
        <img
          src={iconimage}
          className={styles.annualPlanCardImage}
          alt="music"
        />
        <div className={styles.annualPlanHeaderAndPrice}>
          <h5 className={styles.annualPlanHeader}>Annual Plan</h5>
          <p className={styles.yearPrice}>$59.99/year</p>
        </div>
      </div>

      <div className={styles.annualPlanChangeLink}>Change</div>
    </div>
  );
};

export default AnnualPlanCard;
