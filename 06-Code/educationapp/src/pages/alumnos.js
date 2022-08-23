import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import StudentSearch from "../components/StudentSearch";
import MenuApp from "../components/menu";
import AddStudent from "../components/addStudent";

const cookies = new Cookies();





export default class alumnos extends Component {

  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }


  render() {
    return (
      <div>
        <MenuApp />
        <StudentSearch />
        <AddStudent />
       
      </div>
    );
  }
}

