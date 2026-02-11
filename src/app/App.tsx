import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import styles from "./app.module.css";
import OrderCard from "../order_card/OrderCard";
import backgroundImage from "../images/pattern-background-desktop.svg";

const App = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        src={backgroundImage}
        className={styles.annualPlanCardImage}
        alt="music"
      />

      <img
        src={backgroundImage}
        className={`${styles.annualPlanCardImage} ${styles.flippedImage}`}
        alt="music flipped"
      />
      <OrderCard />
      <SpeedInsights />
    </div>
  );
};

export default App;
