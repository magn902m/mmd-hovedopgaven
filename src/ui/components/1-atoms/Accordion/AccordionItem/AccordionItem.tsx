import React, { useState } from "react";
import styles from "./AccordionItem.module.scss";
import CloseIcon from "../../../../../assets/icons/close.svg";
import PlusIcon from "../../../../../assets/icons/plus.svg";

export interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className={styles.AccordionItem}>
      <div className={styles.AccordionTitle} onClick={() => setIsActive(!isActive)}>
        <h5>{title}</h5>
        <div className={styles.AccordionIcons}>
          {isActive ? <img src={CloseIcon} alt="" /> : <img src={PlusIcon} alt="" />}
        </div>
      </div>
      {isActive && <div className={styles.AccordionContent}>{content}</div>}
    </article>
  );
};
