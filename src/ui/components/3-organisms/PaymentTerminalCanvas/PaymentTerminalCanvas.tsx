import React from "react";
import styles from "./PaymentTerminalCanvas.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment } from "./Environment";

import * as THREE from "three";

export const PaymentTerminalCanvas = () => {
  return (
    <div className={styles.PaymentTerminalCanvas_container}>
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
    </div>
  );
};
