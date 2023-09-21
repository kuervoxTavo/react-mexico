import React, { useContext } from "react";
import { MexicoContext } from "../context/MexicoContext";

export const Estados = () => {
  const {
    data: { estados },
    buscaMunicipios,
  } = useContext(MexicoContext);

  return (
    <ul>
      {estados?.map((el, index) => (
        <li key={index} onClick={() => buscaMunicipios(el.id)}>
          {el.nombre}
        </li>
      ))}
    </ul>
  );
};
