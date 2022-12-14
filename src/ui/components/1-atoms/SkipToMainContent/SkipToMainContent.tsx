import React from "react";
import styles from "./SkipToMainContent.module.scss";

export const SkipToMainContent = () => {
  return (
    <a href="#main" className={styles.SkipToMainContent_link}>
      Skip to main content
    </a>
  );
};
