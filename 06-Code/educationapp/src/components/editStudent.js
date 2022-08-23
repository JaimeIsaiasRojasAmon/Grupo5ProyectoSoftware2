import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { ApiUrl } from '../services/apiServices';
//Construimos el componente
function EditStudent() {
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

    //Funcion para actualizar
    /*function updateStudent(idCedula){
        fetch(baseUrl+`/${idCedula}`,{
            method: 'PUT',
            body: 
          })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                idCedula: data.idCedula,
                user: data.user,
                password: data.password,
                name: data.name,
                lastName: data.lastName,
                type_user: data.type_user,
                status: data.status
            })
        })
        
    }*/
    function updateStudent() {
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
                    <Link to={`/alumnos`}><button className="btn btn-primary btn-lg btn-block">Volver a listar alumnos</button></Link>
                    <hr />
                    <h3>REGISTRO DE ESTUDIANTES</h3>
                    <p class="blue-text">
                        Complete todos los campos para registrar al Estudiante
                    </p>
                    <div class="card">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">

                                <label htmlfor="idCedula" class="form-control-label px-3">
                                    Cédula Estudiante<span class="text-danger"> *</span>
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
                                    Nombres del estudiante
                                    <span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"

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
                                    onClick={updateStudent}
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
export default EditStudent