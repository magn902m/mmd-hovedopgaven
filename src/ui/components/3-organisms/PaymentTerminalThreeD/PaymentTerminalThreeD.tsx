import React, { useContext, useEffect, useState } from "react";
import styles from "./PaymentTerminalThreeD.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment } from "./Environment";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";

import * as THREE from "three";
import { ColorPicker } from "../../UpdateAccount/ColorPicker/ColorPicker";

export const PaymentTerminalThreeD = () => {
  const { setUpdateCube } = useContext(ThreeJSContext);
  const [pickedColor, setPickedColor] = useState("#005776");
  const handlePickedColor = (e: any) => setPickedColor(e.target.value);

  const [isRatation360Clicked, setIsRatation360Clicked] = useState(false);
  const [isRatation180Clicked, setIsRatation180Clicked] = useState(false);

  function update() {
    setUpdateCube((old: any) => {
      return {
        ...old,
        pickedColor,
        handlePickedColor,
        isRatation360Clicked,
        setIsRatation360Clicked,
        isRatation180Clicked,
        setIsRatation180Clicked,
      };
    });
  }

  useEffect(() => {
    update();
  }, [pickedColor, isRatation360Clicked, isRatation180Clicked]);

  return (
    <div className={styles.PaymentTerminalThreeD_container}>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Environment />
      </Canvas>
      <ColorPicker
        onChange={handlePickedColor}
        value={pickedColor}
        // profilColor={profilData?.color}
      />
      <button onClick={() => setIsRatation360Clicked(true)}>360°</button>
      <button onClick={() => setIsRatation180Clicked(true)}>180°</button>
    </div>
  );
};
