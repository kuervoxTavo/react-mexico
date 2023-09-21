import React, { useContext } from "react";
import { MexicoContext } from "../context/MexicoContext";

export const Municipios = () => {
  const {
    data: { municipios },
    buscaColonias
  } = useContext(MexicoContext);

  return (
    <ul>
      {municipios?.map((el, index) => (
        <li key={index} onClick={() => buscaColonias(el.id)}>
          {el.nombre}
        </li>
      ))}
    </ul>
  );
};
