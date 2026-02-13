import React from "react";
import styles from "./cardButtons.module.css";

const CardButtons = () => {
  return (
    <div>
      <button className={styles.proceedToPaymentButtonStyle}>
        Proceed to Payment
      </button>
      <button className={styles.cancelOrderButtonStyle}>Cancel Order</button>
    </div>
  );
};

export default CardButtons;
