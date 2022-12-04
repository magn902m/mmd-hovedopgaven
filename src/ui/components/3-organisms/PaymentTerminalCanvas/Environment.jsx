/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Stage } from "@react-three/drei";

import { Cube } from "./Cube";
import { PaymentTerminalModel } from "./PaymentTerminalModel";

extend({ OrbitControls });

export const Environment = () => {
  const { camera, gl } = useThree();
  const ref = useRef();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <Cube /> */}
      <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null}>
          <PaymentTerminalModel scale={0.35} />
        </Suspense>
      </Stage>
    </>
  );
};
