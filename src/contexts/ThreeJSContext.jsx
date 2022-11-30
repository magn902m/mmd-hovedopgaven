/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ThreeJSContext = createContext();

export const ThreeJSProvider = ({ children }) => {
  const [updateCube, setUpdateCube] = useState({});

  const value = {
    updateCube,
    setUpdateCube,
  };

  return <ThreeJSContext.Provider value={value}>{children}</ThreeJSContext.Provider>;
};
