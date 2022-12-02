/* eslint-disable react/no-unknown-property */
import React from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Cube } from "./Cube";
import { ColorPicker } from "../../UpdateAccount/ColorPicker/ColorPicker";

extend({ OrbitControls, ColorPicker });

export const Environment = () => {
  const { camera, gl } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Cube />
    </>
  );
};
