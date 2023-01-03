/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useContext } from "react";
import styles from "./Environment.module.scss";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Html, Stage } from "@react-three/drei";
import { PaymentTerminalModel } from "./PaymentTerminalModel";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";

// import { Cube } from "./Cube";

// orbitControl: vi kan zoome ind og ud. Extend muliggøre det for react at gøre dette
extend({ OrbitControls });

export const Environment = () => {
  const { camera, gl } = useThree();
  const ref = useRef();

  const { updateModel } = useContext(ThreeJSContext);

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <Cube /> */}
      {updateModel.showImage ? (
        <Html center transform occlude position={[0, 0.4, 0.33]} scale={[0.3, 0.4, 1]}>
          <img
            className={styles.Environment_imageHTML}
            src={updateModel.imageUrl}
            alt="Logo eller ikon, som bruger har uploadet"
          />
        </Html>
      ) : null}

      <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null} r3f>
          <PaymentTerminalModel scale={0.35} />
        </Suspense>
      </Stage>
    </>
  );
};
