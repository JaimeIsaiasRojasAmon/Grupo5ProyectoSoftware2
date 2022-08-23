import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import UserSearch from "../components/UserSearch";
import MenuApp from "../components/menu";
import AddUser from "../components/addUser";


const cookies = new Cookies();

export default class usuarios extends Component {
  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }

  render() {
    return (
      <div>
        <MenuApp />
        <UserSearch />
        <AddUser />
      </div>
    );
  }
}
