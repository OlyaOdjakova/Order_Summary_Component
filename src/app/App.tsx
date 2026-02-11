import React from "react";
import styles from "./app.module.css";
import OrderCard from "../order_card/OrderCard";

const App = () => {
  return (
    <div className={styles.appJsStyle}>
      <OrderCard />
    </div>
  );
};

export default App;
