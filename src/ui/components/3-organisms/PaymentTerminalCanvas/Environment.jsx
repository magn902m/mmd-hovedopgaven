/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useContext } from "react";
import { extend, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Stage } from "@react-three/drei";
import * as THREE from "three";
import { PaymentTerminalModel } from "./PaymentTerminalModel";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";

// import { Cube } from "./Cube";

extend({ OrbitControls });

export const Environment = () => {
  const { camera, gl } = useThree();
  const ref = useRef();

  const { updateModel } = useContext(ThreeJSContext);
  console.log(updateModel.imageUrl);

  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + "/images/nets_logo_white.svg"
    // updateModel.imageUrl
  );

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <Cube /> */}
      {updateModel.showImage ? (
        <mesh position={[0, 0.3, 0.33]} scale={[0.3, 0.3, 0.3]}>
          <planeBufferGeometry attach="geometry" />
          <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
        </mesh>
      ) : null}
      <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
        <Suspense fallback={null} r3f>
          <PaymentTerminalModel scale={0.35} />
        </Suspense>
      </Stage>
    </>
  );
};
