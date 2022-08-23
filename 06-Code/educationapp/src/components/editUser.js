import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { ApiUrl } from '../services/apiServices';
//Construimos el componente
function EditUser() {
    const params = useParams();
    const baseUrl = ApiUrl + "usuario"

    //Hooks para hacer el put
    const [idCedula, setIdCedula] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type_user, setType_user] = useState('')
    const [status, setStatus] = useState('')
    //Funcion para hacer el put

    useEffect(() => {
        axios.post(baseUrl, { idCedula: params.id }).then(res => {
            console.log(res.data[0])
            const datacliente = res.data[0]
            setIdCedula(datacliente.idCedula)
            setUser(datacliente.user)
            setPassword(datacliente.password)
            setName(datacliente.name)
            setLastName(datacliente.lastName)
            setType_user(datacliente.type_user)
            setStatus(datacliente.status)
        })
    }, [])

    function updateUser() {
        //Nuevo objeto para actualizar el usuario:
        const actualizarusuario = {
            idCedula: idCedula,
            user: user,
            password: password,
            name: name,
            lastName: lastName,
            type_user: type_user,
            status: status
        }
    
        //Hacer la petición usando axios
        axios.put(baseUrl+`/${params.id}`, actualizarusuario)
            .then(res => {
                console.log(res.data)
                alert('Student with id: '+res.data.idCedula+' was updated.')
            })
            .then(err => { console.log(err) })
    }


    return (
        <div class="container-fluid px-1 py-5 mx-auto">



            <div class="row d-flex justify-content-center">

                <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <Link to={`/usuarios`}><button className="btn btn-primary btn-lg btn-block">Volver a listar usuarios</button></Link>
                    <hr />
                    <h3>REGISTRO DE USUARIOS</h3>
                    <p class="blue-text">
                        Complete todos los campos para registrar al Usuario
                    </p>
                    <div class="card">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">

                                <label htmlfor="idCedula" class="form-control-label px-3">
                                    Cédula Usuario<span class="text-danger"> *</span>
                                </label>
                                <input
                                    type="text"

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

                                    placeholder="Inicial del nombre y apellido, Ej: jcarrera"
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

                                    placeholder="Número de cédula, EJ: 1600894628"
                                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label px-3">
                                    Nombres del usuario
                                    <span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"

                                    placeholder="Nombres del Usuario"
                                    value={name} onChange={(e) => { setName(e.target.value) }}
                                />{" "}
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label px-3">
                                    Apellidos del usuario
                                    <span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    placeholder="Apellidos del Usuario "
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
                                    placeholder="Ej: activo, inactivo"
                                    value={status} onChange={(e) => { setStatus(e.target.value) }}
                                />{" "}
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6">
                                {" "}
                                <button
                                    onClick={updateUser}
                                    type="submit"
                                    class="btn-block btn-primary"
                                >
                                    Guardar Cambios del Usuario
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default EditUser
