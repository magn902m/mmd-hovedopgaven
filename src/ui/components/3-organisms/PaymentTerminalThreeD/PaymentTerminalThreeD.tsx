import React, { useContext, useEffect, useState } from "react";
import styles from "./PaymentTerminalThreeD.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment } from "./Environment";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";

import * as THREE from "three";

export const PaymentTerminalThreeD = () => {
  const { setUpdateCube } = useContext(ThreeJSContext);

  const [isRatation360Clicked, setIsRatation360Clicked] = useState(false);
  const [isRatation180Clicked, setIsRatation180Clicked] = useState(false);

  function updateCubeSettings() {
    setUpdateCube((old: any) => {
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
      <button onClick={() => setIsRatation360Clicked(true)}>360°</button>
      <button onClick={() => setIsRatation180Clicked(true)}>180°</button>
    </div>
  );
};
