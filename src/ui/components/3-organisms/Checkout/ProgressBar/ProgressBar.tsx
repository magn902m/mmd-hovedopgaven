import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({ toggleCheckoutArr }: any) => {
  return (
    <section className={styles.ProgressBar_container}>
      {/* Here are we checking if the current number is equal to isCurrent and changing a class that way */}
      <ul className={styles.ProgressBar_steps_container}>
        <li>
          <Link to="/cart" className={styles.ProgressBar_to_cart}>
            Indkøbskurv
          </Link>
        </li>
        <li>{">"}</li>
        <li
          className={styles.ProgressBar_step_item}
          onClick={() => {
            if (toggleCheckoutArr.isCurrent === 2 || toggleCheckoutArr.isCurrent === 3) {
              toggleCheckoutArr.setToggleCheckoutInformation(true);
              toggleCheckoutArr.setToggleCheckoutDelivery(false);
              toggleCheckoutArr.setToggleCheckoutOverview(false);
              toggleCheckoutArr.setIsCurrent(1);
            }
          }}
        >
          <p
            className={`${styles.ProgressBar_progress_count} ${
              toggleCheckoutArr.isCurrent === 1 ? styles.ProgressBar_current_item : null
            }`}
          >
            Oplysninger
          </p>
        </li>
        <li>{">"}</li>
        <li
          className={styles.ProgressBar_step_item}
          onClick={() => {
            if (toggleCheckoutArr.isCurrent === 3) {
              toggleCheckoutArr.setToggleCheckoutInformation(false);
              toggleCheckoutArr.setToggleCheckoutDelivery(true);
              toggleCheckoutArr.setToggleCheckoutOverview(false);
              toggleCheckoutArr.setIsCurrent(2);
            }
          }}
        >
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
