import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cerrarSesion } from "./singOut";

const menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h6 className="navbar-brand">MENU DEL SISTEMA</h6>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
            <a className="nav-link" href="./usuarios">
              Gestión de Usuarios
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="./alumnos">
              Gestión de Estudiantes
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="./profesores">
              GEstión de  Docentes
            </a>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default menu;
