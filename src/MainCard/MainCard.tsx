import image from "../Images/illustration-hero.svg";
import AnnualPlanCard from "./AnnualPlanCard";
import TypographyContent from "../Typography/TypographyContent";
import CancelOrder from "../Buttons/CancelOrder";
import styles from "./card.module.css";
import ProceedToPayment from "../Buttons/ProceedToPayment";

const MainCard = () => {
  return (
    <div className={styles.mainCardStyle}>
      <img
        className={styles.imageStyle}
        src={image}
        alt="girl dancing to music"
      />

      <div className={styles.annualPlanHeaderAndPrice}>
        <TypographyContent />
        <AnnualPlanCard />
        <ProceedToPayment />
        <CancelOrder />
      </div>
    </div>
  );
};

export default MainCard;
