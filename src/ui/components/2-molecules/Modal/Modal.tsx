import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";
import { Button } from "../../1-atoms";
import { PaymentTerminalCanvas } from "../../3-organisms";
import { ColorPicker } from "../ColorPicker";
import styles from "./Modal.module.scss";

export const Modal = (props: any) => {
  const { updateModel, setUpdateModel } = useContext(ThreeJSContext);

  const [isRatation360Clicked, setIsRatation360Clicked] = useState(false);
  const [isRatation180Clicked, setIsRatation180Clicked] = useState(false);

  function updateCubeSettings() {
    setUpdateModel((old: any) => {
      return {
        ...old,
        isRatation360Clicked,
        setIsRatation360Clicked,
        isRatation180Clicked,
        setIsRatation180Clicked,
      };
    });
  }

  useEffect(() => {
    updateCubeSettings();
  }, [isRatation360Clicked, isRatation180Clicked]);

  return (
    <>
      <aside className={styles.Model_centered}>
        <div className={styles.Model_modal}>
          <header>
            <div>
              <h3 className={styles.Model_heading}>{props.name}</h3>
              <p className={styles.Model_description}>{props.desc}</p>
            </div>
            <Button
              label="Færdig"
              onClick={() => {
                props.saveUserPreference();
                props.setIsOpen(false);
              }}
            />
          </header>

          <PaymentTerminalCanvas />
          <div className={styles.Model_actions_container}>
            <div className={styles.Model_action_btns_container}>
              <Button
                label={"Se produkt 360°"}
                onClick={() => updateModel.setIsRatation360Clicked(true)}
              />
              <Button
                label={"Vend 180°"}
                onClick={() => updateModel.setIsRatation180Clicked(true)}
              />
            </div>
            <ColorPicker
              onChange={props.handlePickedColor}
              value={props.pickedColor}
              profilcolor={props.profilData?.color}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
