import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Form, Button, Card, Alert, Container } from "react-bootstrap"

export default function Home(){
    return(
        <Navbar fixed="top" style={{backgroundColor: "#000d3b"}}>
            <a href="#" style={{color: "#ffffff", marginLeft: "10px",fontSize:"2rem"}} className="navbar-brand">SKDLR</a>
            <Link style={{marginRight: "10px"}} to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </Navbar> 
    )
}