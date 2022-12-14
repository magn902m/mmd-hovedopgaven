import React, { useState } from "react";
import styles from "./AccordionItem.module.scss";
// import CloseIcon from "../../../../../assets/icons/close.svg";
// import PlusIcon from "../../../../../assets/icons/plus.svg";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  console.log(content);

  return (
    <article className={styles.AccordionItem}>
      <div className={styles.AccordionTitle} onClick={() => setIsActive(!isActive)}>
        <h5>{title}</h5>
        <div className={styles.AccordionIcons}>
          {/* {isActive ? <img src={CloseIcon} alt="" /> : <img src={PlusIcon} alt="" />} */}
          {
            <div className={isActive ? styles.AccordionItem_open : styles.AccordionItem_close}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </div>
          }
        </div>
      </div>
      {isActive && (
        <div className={styles.AccordionContent} dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </article>
  );
};
