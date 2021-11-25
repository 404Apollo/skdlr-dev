import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Form, Button, Card, Alert, Container } from "react-bootstrap"
import logo from '../images/image2vector.svg';
import signup from '../components/Signup'
export default function Home(){
    return(
        <Navbar fixed="top" style={{backgroundColor: "#000000"}}>
            <a href="#" style={{color: "#ffffff", marginLeft: "10px",fontSize:"2rem"}} className="navbar-brand">
                <img className="img-responsive" src={logo} alt="logo" width="193" height="130" />
                SKDLR
            </a>
                
                <Link to="../Signup" className="ml-auto" >
                <Button className="ml-auto">Sign Up </Button>
                </Link>
                
            
            
        </Navbar> 
    )
}