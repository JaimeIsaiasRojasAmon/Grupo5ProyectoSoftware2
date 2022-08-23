import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import {Link, useNavigate} from 'react-router-dom'

const StudentSearch = () => {
  const [client, setClient] = useState();
  const url = ApiUrl + "students";
  const fetchApi = async () => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  

    setClient(responseJSON);



  };
  useEffect(() => {
    fetchApi();
  });
  function deleteStudent (idCedula){
    fetch(ApiUrl + `usuario/${idCedula}`,{
      method: 'DELETE',
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      alert('Student with id ' + idCedula + ' was deleted!')
   
    })
  }
  /*Other option to delete
  function deleteStudent(idCedula) {
    axios.post(ApiUrl + 'usuario', { idCedula: idCedula }).then(res => {
      console.log(res.data)
      alert('Student with id ' + idCedula + ' was deleted!')

    }).catch(err => {
      console.log(err)
    })
  }*/
  return (
    <div>
      <div class="card-body">
        <br />
        <br />
        <h3 className="text-center">Students list </h3> 

        <div className="col-auto text-center">
            <a  href="#control"><button type="button" class="btn btn-success">Insert student</button></a>
        </div>
        <br />
        <p>This shows students information from API: {url} </p> 

      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">lastname</th>
            <th scope="col">user</th>
            <th scope="col">password</th>
            <th scope="col">type user</th>
            <th scope="col">status</th>
            
          </tr>
        </thead>
        <tbody>
          {!client
            ? "Loading"
            : client.map((client, index) => {
              return (
                <tr className="table-info">
                  <td className="text-center">{client.idCedula}</td>
                  <td className="text-center">{client.name}</td>
                  <td className="text-center">{client.lastName}</td>
                  <td className="text-center">{client.user}</td>
                  <td className="text-center">{client.password}</td>
                  <td className="text-center">{client.type_user}</td>
                  <td className="text-center">{client.status}</td>
                  <td>
                  &nbsp;&nbsp;
                  <Link to={`/alumnos/${client.idCedula}`}><button className="btn btn-outline-info">Editar</button></Link>
                  &nbsp;
                  &nbsp;
                  <button type="button" onClick={() => { deleteStudent(client.idCedula) }} class="btn btn-outline-info">Borrar</button>
                  </td>
                </tr>

              );
            })}
        </tbody>
      </table>
      <br /><br /><br /><br /><br />
      <div id="control">
        
      </div>
    </div>
  );
};

export default StudentSearch;
