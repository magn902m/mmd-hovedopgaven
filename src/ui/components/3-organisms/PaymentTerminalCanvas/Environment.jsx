/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from "react";
import { extend, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Stage } from "@react-three/drei";
import * as THREE from "three";
import { PaymentTerminalModel } from "./PaymentTerminalModel";
// import { Cube } from "./Cube";

extend({ OrbitControls });

export const Environment = () => {
  const { camera, gl } = useThree();
  const ref = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + "/images/nets_logo_white.svg"
  );

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <Cube /> */}
      <mesh position={[0, 0.3, 0.33]} scale={[0.3, 0.3, 0.3]}>
        <planeBufferGeometry attach="geometry" />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
      </mesh>

      <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null} r3f>
          <PaymentTerminalModel scale={0.35} />
        </Suspense>
      </Stage>
    </>
  );
};
