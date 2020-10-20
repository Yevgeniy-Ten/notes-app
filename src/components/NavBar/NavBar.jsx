import React from "react";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
const NavBar = ()=> {
    return <Navbar bg="dark" variant="dark" fixed="top">
        <NavbarBrand>
            Notes-App
        </NavbarBrand>
        <Nav className="ml-auto">
            <NavLink className="nav-link" to={"/todos"}>Todos</NavLink>
            <NavLink className="nav-link" to={"/movies"}>Movies</NavLink>
            <NavLink className="nav-link" to={"/about"}>About</NavLink>
        </Nav>
    </Navbar>
}
export default NavBar