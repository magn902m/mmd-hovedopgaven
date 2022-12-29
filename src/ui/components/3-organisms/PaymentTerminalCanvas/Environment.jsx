/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useContext } from "react";
import styles from "./Environment.module.scss";
import { extend, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Html, Stage } from "@react-three/drei";
import * as THREE from "three";
import { PaymentTerminalModel } from "./PaymentTerminalModel";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";
import { useTexture, Image } from "@react-three/drei";

// import { Cube } from "./Cube";

extend({ OrbitControls });

export const Environment = () => {
  const { camera, gl } = useThree();
  const ref = useRef();

  const { updateModel } = useContext(ThreeJSContext);

  //* Idea 1
  // const imageUrlTexture = useLoader(
  //   THREE.TextureLoader,
  //   // updateModel.imageUrl
  //   process.env.PUBLIC_URL + "/images/nets_logo_white.svg"
  //   // process.env.PUBLIC_URL + "/images/move-3500-nexi-square-tilt.webp"
  // );
  // const imageUrlTexture = useTexture(
  //   typeof updateModel.imageUrl === "string" && updateModel.imageUrl.trim().length === 0
  //     ? process.env.PUBLIC_URL + "/images/nets_logo_white.svg"
  //     : updateModel.imageUrl
  // );

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <Cube /> */}
      {updateModel.showImage ? (
        //* Idea 1
        // <mesh position={[0, 0.3, 0.33]} scale={[0.3, 0.3, 1]}>
        //   <planeBufferGeometry attach="geometry" />
        //   <meshBasicMaterial attach="material" map={imageUrlTexture} toneMapped={false} />
        // </mesh>

        //* Idea 2
        // <mesh position={[0, 0.3, 0.33]} scale={[0.3, 0.3, 1]}>
        //   <Image
        //     url={process.env.PUBLIC_URL + "/images/move-3500-nexi-square-tilt.webp"}
        //     transparent
        //   />
        // </mesh>
        <Html center position={[0, 0.3, 0.34]}>
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
