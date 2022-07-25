import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Provincias from "./pages/Provincias";
import { Actualizar, Crear, Eliminar } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-slate-400 h-screen p-2 flex flex-col items-center ">
          <header className="flex justify-between w-[95vw] items-center bg-white right-0 left-0 mx-auto rounded-md p-3 h-[5rem] shadow-2xl">
            <NavLink to={"/"}>
              <div className="bg-slate-400 p-2 rounded-lg shadow-md text-slate-200 hover:bg-orange-300">
                PROVINCIAS
              </div>
            </NavLink>
            <img src={logo} className="App-logo h-[5rem]" alt="logo" />
          </header>

          <div className="mt-10 w-screen lg:w-[50rem] p-2">
            <Routes>
              <Route path="/" element={<Provincias />} />
              <Route path="/crear" element={<Crear />} />
              <Route path="/actualizar/:id" element={<Actualizar />} />
              <Route path="/eliminar/:id" element={<Eliminar />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
