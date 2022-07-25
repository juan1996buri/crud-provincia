import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { findAllProvincias } from "../services/provincia";
import { NavLink, useLocation } from "react-router-dom";

const Provincias = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const location = useLocation().state;

  useEffect(() => {
    const peticionGet = async () => {
      if (location) {
        const resp = await findAllProvincias();
        setData(resp.filter((item) => item.id !== location.id));
      } else {
        const resp = await findAllProvincias();
        setData(resp);
      }
    };
    peticionGet();
  }, []);

  return (
    <div className="bg-slate-300 p-3 rounded-lg shadow-2xl ">
      <div className="mb-3 flex justify-between">
        <input
          placeholder="buscar..."
          className="p-1 bg-slate-200 rounded-lg"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <NavLink to={"/crear"}>
          <div className="bg-slate-100 md:w-52 w-40 flex justify-center items-center rounded-lg hover:bg-orange-300 shadow-2xl cursor-pointer">
            Nuevo
          </div>
        </NavLink>
      </div>

      <div className="flex gap-3 justify-between text-center ">
        <p className="bg-slate-500 w-52 rounded-lg text-white shadow-md hover:scale-105">
          id
        </p>
        <p className="bg-slate-500 w-52 rounded-lg text-white shadow-md hover:scale-105">
          nombre
        </p>
        <p className="bg-slate-500 w-52 rounded-lg text-white shadow-md hover:scale-105">
          opciones
        </p>
      </div>
      <div className="lg:overflow-hidden ">
        {data
          ?.filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.nombre.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((provincia, index) => (
            <div
              className=" flex gap-3 justify-between text-center mt-2 items-center"
              key={provincia.id}>
              <p className="bg-slate-400 w-52 p-2 rounded-lg">{index}</p>
              <p className="bg-slate-400 w-52 p-2 rounded-lg">
                {provincia.nombre}
              </p>
              <div className="w-52 flex justify-center gap-2">
                <NavLink to={`/actualizar/${provincia.id}`}>
                  <Button title={"Editar"} background={"bg-emerald-500"} />
                </NavLink>
                <NavLink to={`/eliminar/${provincia.id}`}>
                  <Button title={"Eliminar"} background={"bg-red-500"} />
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Provincias;
