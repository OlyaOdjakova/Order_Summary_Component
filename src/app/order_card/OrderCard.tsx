import image from "../../images/illustration-hero.svg";
import styles from "./orderCard.module.css";
import CardBody from "./card_body/CardBody";

const OrderCard = () => {
  return (
    <div className={styles.mainCardStyle}>
      <img
        className={styles.imageStyle}
        src={image}
        alt="girl dancing to music"
      />
      <CardBody />
    </div>
  );
};

export default OrderCard;
