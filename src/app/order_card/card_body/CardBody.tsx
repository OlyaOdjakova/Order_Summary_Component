import CardContent from "./card_content/CardContent";
import AnnualPlanCard from "./AnnualPlanCard";
import CardButtons from "./card_buttons/CardButtons";
import styles from "./cardBody.module.css";

const CardBody = () => {
  return (
    <div className={styles.annualPlanHeaderAndPrice}>
      <CardContent />
      <AnnualPlanCard />
      <CardButtons />
    </div>
  );
};

export default CardBody;
