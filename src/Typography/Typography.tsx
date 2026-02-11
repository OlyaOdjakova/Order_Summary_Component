import React from "react";
import styles from "./typography.module.css";

interface TypographyProps {
  variant: string;
  children?: React.ReactNode;
}

const TypographyType: React.FC<TypographyProps> = (props) => {
  // const { variant, children } = props;
  if (props.variant === "heading") {
    return <h1 className={styles.headerStyle}>{props.children}</h1>;
  } else if (props.variant === "body") {
    return <p className={styles.bodyStyle}>{props.children}</p>;
  }

  return null;
};

export default TypographyType;
