import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Form, Button, Card, Alert, Container } from "react-bootstrap"
import logo from '../images/image2vector.svg';

export default function Home(){
    return(
        <Navbar fixed="top" style={{backgroundColor: "#000000"}}>
            <a href="#" style={{color: "#ffffff", marginLeft: "10px",fontSize:"2rem"}} className="navbar-brand">
                <img className="img-responsive" src={logo} alt="logo" width="193" height="130" />
                SKDLR
            </a>
            <div className="mr-sm-2">
                <Link to="/signup">Sign Up</Link>
            </div>
            {/* <Link className="text-center" to="/login">Log In</Link> */}
        </Navbar> 
    )
}