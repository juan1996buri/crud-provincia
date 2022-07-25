import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { findProvincia, updateProvincia } from "../services/provincia";

const Actualizar = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [provincia, setProvincia] = useState({});

  useEffect(() => {
    findProvincia(id, setProvincia);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProvincia((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className=" h-[10rem] bg-slate-100 text-center flex flex-col justify-between rounded-lg p-2">
      <p className="font-bold text-xl">EDITAR PROVINCIA</p>
      <div>
        <label htmlFor="nombre" className="mr-3">
          Nombre:
        </label>
        <input
          id="nombre"
          value={provincia.nombre}
          className="p-1 bg-slate-300 rounded-lg"
          name="nombre"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex gap-2 justify-center">
        <NavLink to={"/"}>
          <Button
            title={"Actualizar"}
            background={"bg-emerald-500"}
            action={() => updateProvincia(provincia)}
          />
        </NavLink>
        <NavLink to="/">
          <Button title={"Cancelar"} background={"bg-red-500"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Actualizar;
