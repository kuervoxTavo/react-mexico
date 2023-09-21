import React, { createContext, useEffect, useState } from "react";

export const MexicoContext = createContext();

export const MexicoProvider = ({ children }) => {
  const [data, setData] = useState({
    estados: null,
    municipios: null,
    colonias: null,
  });

  useEffect(() => {
    // cargar los estados
    const allEstados = async () => {
      const url = `http://localhost:3000/api/estados`;
      const resul = await fetch(url);
      const estados = await resul.json();
      setData({ ...data, estados });
    };

    allEstados();
  }, []);

  const buscaMunicipios = async (id) => {
    const url = `http://localhost:3000/api/municipios/${id}`;
    const resul = await fetch(url);
    const municipios = await resul.json();
    setData({ ...data,colonias: null, municipios });
  };

  const buscaColonias = async (id) => {
    const url = `http://localhost:3000/api/colonias/${id}`;
    const resul = await fetch(url);
    const colonias = await resul.json();
    setData({ ...data, colonias });
  };

  const informacion = {
    data,
    buscaMunicipios,
    buscaColonias,
  };

  return (
    <MexicoContext.Provider value={informacion}>
      {children}
    </MexicoContext.Provider>
  );
};
