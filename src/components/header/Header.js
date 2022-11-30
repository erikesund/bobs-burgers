import "../../css/header/Header.css"
import React from "react";
import MenuBar from "./MenuBar";

function Header () {

  return (
    <div>
      <div id="header">
      <img src="/bob_with_burger.png" alt="Bob Holding a Burger" height="100"/>
      <img src="/bobs_burgers_logo.png" alt="The Bob's Burgers Logo In Red" height="100"/>
      <img src="/burgerlogo.png" alt="A Burger"/>
      </div>
      <MenuBar/>
      <hr/>
    </div>
  )
}

export default Header;
