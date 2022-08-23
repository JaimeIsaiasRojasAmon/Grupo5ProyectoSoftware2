import React, { Component, useEffect, useState } from "react";
import MenuApp from "../components/menu";
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import Picture from "../assets/images/principal.jpg"
const cookies = new Cookies();
export default class principal extends Component {
  
  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <div>
      <div>
        <MenuApp />
      </div>

      <div className="col-12">
        <img className="img-fluid w-100" src={Picture} alt="frontispicio"/>
      </div>
      </div>

    );
  }
}
