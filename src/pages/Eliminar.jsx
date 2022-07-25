import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { findProvincia, deleteProvincia } from "../services/provincia";

const Eliminar = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [provincia, setProvincia] = useState({});

  useEffect(() => {
    findProvincia(id, setProvincia);
  }, []);

  return (
    <div className=" h-[10rem] bg-slate-100 text-center flex flex-col justify-between rounded-lg p-5">
      <p className="font-bold text-xl uppercase">
        Eliminar Provincia llamada <br />
        <span className="text-orange-600">{provincia.nombre}</span>
      </p>
      <div className="flex gap-2 justify-center">
        <NavLink to={"/"} state={provincia}>
          <Button
            title={"Eliminar"}
            background={"bg-emerald-500"}
            action={() => deleteProvincia(provincia.id)}
          />
        </NavLink>

        <NavLink to="/">
          <Button title={"Cancelar"} background={"bg-red-500"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Eliminar;
