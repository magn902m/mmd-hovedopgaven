import React from "react";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({ toggleCheckoutArr }: any) => {
  console.log(toggleCheckoutArr.isCurrent);
  console.log(toggleCheckoutArr.isCurrent === 1 ? styles.ProgressBar_progress_count : "");
  console.log(toggleCheckoutArr.isCurrent === 2 ? styles.ProgressBar_progress_count : "");
  console.log(toggleCheckoutArr.isCurrent === 3 ? styles.ProgressBar_progress_count : "");
  return (
    <section className={styles.ProgressBar_container}>
      {/* Here are we checking if the current number is equal to isCurrent and changing a class that way */}
      <ul className={styles.ProgressBar_steps_container}>
        <li className={styles.ProgressBar_step_item}>
          <p
            className={`${styles.ProgressBar_progress_count} ${
              toggleCheckoutArr.isCurrent === 1 ? styles.ProgressBar_current_item : ""
            }`}
          >
            Oplysninger
          </p>
        </li>
        <li>{">"}</li>
        <li className={styles.ProgressBar_step_item}>
          <p
            className={`${styles.ProgressBar_progress_count} ${
              toggleCheckoutArr.isCurrent === 2 ? styles.ProgressBar_current_item : ""
            }`}
          >
            Levering
          </p>
        </li>
        <li>{">"}</li>
        <li className={styles.ProgressBar_step_item}>
          <p
            className={`${styles.ProgressBar_progress_count} ${
              toggleCheckoutArr.isCurrent === 3 ? styles.ProgressBar_current_item : ""
            }`}
          >
            Oversigt
          </p>
        </li>
      </ul>
    </section>
  );
};
