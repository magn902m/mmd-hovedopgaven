/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ThreeJSContext = createContext();

export const ThreeJSProvider = ({ children }) => {
  const [updateModel, setUpdateModel] = useState({});

  const value = {
    updateModel,
    setUpdateModel,
  };

  return <ThreeJSContext.Provider value={value}>{children}</ThreeJSContext.Provider>;
};
