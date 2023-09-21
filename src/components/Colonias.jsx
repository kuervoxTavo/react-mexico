import React, { useContext } from "react";
import { MexicoContext } from "../context/MexicoContext";

export const Colonias = () => {
  const {
    data: { colonias },
  
  } = useContext(MexicoContext);

  return (
    <ul>
      {colonias?.map((el, index) => (
        <li key={index}>
          {el.nombre}
        </li>
      ))}
    </ul>
  );
};
