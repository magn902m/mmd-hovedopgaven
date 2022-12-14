import React, { useRef, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";

export const Cube = () => {
  const cubeRef = useRef(null);

  const { updateModel } = useContext(ThreeJSContext);

  // useFrame(({ clock }) => cubeRef.current.rotation.x = clock.getElapsedTime();
  useFrame(() => {
    // cubeRef.current.rotation.x += 0.01;
  });

  updateModel.isRatation360Clicked === true ? handleRotation360() : null;
  function handleRotation360() {
    updateModel.setIsRatation360Clicked(false);
    gsap.to(cubeRef.current.rotation, {
      duration: 1,
      y: cubeRef.current.rotation.y + Math.PI * 1,
    });
  }

  updateModel.isRatation180Clicked === true ? handleRotation180() : null;
  function handleRotation180() {
    updateModel.setIsRatation180Clicked(false);
    gsap.to(cubeRef.current.rotation, {
      duration: 1,
      y: cubeRef.current.rotation.y + Math.PI * 0.5,
    });
  }

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color={updateModel.pickedColor ? updateModel.pickedColor : "#005776"} />
      </mesh>
    </>
  );
};
