import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Profesores from '../pages/profesores';
import Alumnos from '../pages/alumnos';
import Usuarios from '../pages/usuarios'
import Principal from '../pages/principal';
import EditStudent from '../components/editStudent';
import EditUser from '../components/editUser';
import EditTeacher from '../components/editTeacher';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/principal' element={<Principal/>}/> 
        <Route exact path='/profesores' element={<Profesores/>}/> 
        <Route exact path='/alumnos' element={<Alumnos/>}/> 
        <Route exact path='/usuarios' element={<Usuarios/>}/> 
        <Route exact path='/alumnos/:id' element={<EditStudent />}></Route>
        <Route exact path='/usuarios/:id' element={<EditUser />}></Route>
        <Route exact path='/profesores/:id' element={<EditTeacher />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
