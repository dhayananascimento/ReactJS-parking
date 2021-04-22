import React, { useState, createContext } from "react";

export const Context = createContext();

export default function MainProvider({ children }) {
  const [plate, setPlate] = useState("");
  const [actualTab, setActualTab] = useState(1);

  return (
    <Context.Provider value={{ plate, setPlate, actualTab, setActualTab }}>
      {children}
    </Context.Provider>
  );
}
