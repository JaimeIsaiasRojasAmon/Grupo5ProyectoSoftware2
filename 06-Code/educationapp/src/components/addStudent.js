import React, { useState } from 'react'
import axios from 'axios'
import { ApiUrl } from '../services/apiServices';
//Construimos el componente
function AddStudent() {
  const baseUrl = ApiUrl + "user";
  //Hooks para hacer el put
  //Hooks para hacer el put
  const [idCedula, setIdCedula] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [type_user, setType_user] = useState('')
  const [status, setStatus] = useState('')
  //Función agregar usuario que va con el onclick
  //Instalamos uniqid "npm i uniqid" si queremos un id único sino nel
  //Instalamos axios "npm i axios"
  //En package.json añadimos el proxy de nuestro localhost:port/
  function adddStudent() {

    var student = {
      idCedula: idCedula,
      user: user,
      password: password,
      name: name,
      lastName: lastName,
      type_user: type_user,
      status: status
    }
    console.log(student)

    axios.post(baseUrl, student)
      .then(res => {
        alert(`Se ha registrado con exito a ${student.name} ${student.lastName}`);
        window.location.href = "./alumnos";

      })
      .then(err => { console.log(err) })
  }

  return (
    
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>REGISTRO DE ESTUDIANTES</h3>
            <p class="blue-text">
              Complete todos los campos para registrar al Estudiante
            </p>
            <div class="card">

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">

                  <label class="form-control-label px-3">
                    Cédula Estudiante<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="txtCedula"
                    name="txtCedula"
                    placeholder="ej: 0701990836"
                    value={idCedula} onChange={(e) => { setIdCedula(e.target.value) }}
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Nombre de usuario<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="txtUsuario"
                    name="txtUsuario"
                    placeholder="Ej: jcarrera"
                    value={user} onChange={(e) => { setUser(e.target.value) }}
                  />
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Contraseña<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="txtPassword"
                    name="txtPassword"
                    placeholder="Número de cédula, EJ: 1600894628"
                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                  />
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Nombres del estudiante
                    <span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="txtNombre"
                    name="txtNombre"
                    placeholder="Nombres del Estudiante"
                    value={name} onChange={(e) => { setName(e.target.value) }}
                  />{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Apellidos del estudiante
                    <span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="txtApellido"
                    name="txtApellido"
                    placeholder="Apellidos del Estudiante "
                    value={lastName} onChange={(e) => { setLastName(e.target.value) }}
                  />{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Tipo de usuario<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="txtTipo"
                    name="txtTipo"
                    placeholder="Ej: docente, alumno"
                    value={type_user} onChange={(e) => { setType_user(e.target.value) }}
                  />{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Status<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="txtStatus"
                    name="txtStatus"
                    placeholder="Ej: activo, inactivo"
                    value={status} onChange={(e) => { setStatus(e.target.value) }}
                  />{" "}
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="form-group col-sm-6">
                  {" "}
                  <button
                    onClick={adddStudent}
                    type="submit"
                    class="btn-block btn-primary"
                  >
                    Registrar Estudiante
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
  )
}
export default AddStudent