import React, { useState } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { createProvincia } from "../services/provincia";

const Crear = () => {
  const [provincia, setProvincia] = useState({
    id: "",
    nombre: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProvincia((...data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className=" h-[10rem] bg-slate-100 text-center flex flex-col justify-between rounded-lg p-2">
      <p className="font-bold text-xl">NUEVA PROVINCIA</p>
      <div>
        <label htmlFor="nombre" className="mr-3">
          Nombre:
        </label>
        <input
          id="nombre"
          placeholder="ingrese un nombre"
          className="p-1 bg-slate-300 rounded-lg"
          name="nombre"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex gap-2 justify-center">
        <NavLink to={"/"}>
          <Button
            title={"Crear"}
            background={"bg-emerald-500"}
            action={() => createProvincia(provincia)}
          />
        </NavLink>

        <NavLink to="/">
          <Button title={"Cancelar"} background={"bg-red-500"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Crear;
