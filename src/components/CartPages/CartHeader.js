import React from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import logo from '../../assests/logo.svg';
import toggle_icon from '../../assests/toggle-icon.svg';
import cart from '../../assests/cart.svg';
import avtar from  '../../assests/avtar.svg';
import toggle from '../../assests/Vector (1).svg';

function CardHeader() {
    return (
        <div className="cart-header">
            <Navbar collapseOnSelect expand="lg">
                <div className="d-flex flex-column">
                    <Navbar.Brand href="#home"><img className="header" src={logo} alt="Platoo" /></Navbar.Brand>
                    <p>Your Own Personal Chef</p>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav float-right" >
                    <span className="navbar-toggle-icon text-white">
                        <img src={toggle_icon} alt="toggle_icon" />
                    </span>
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav >
                        <Nav.Link href="#home" className="nav-text mx-2" >Pricing</Nav.Link>
                        <Nav.Link href="#features" className="nav-text mx-2">Meals</Nav.Link>
                        <Nav.Link href="#pricing" className="nav-text mx-2">About us</Nav.Link>
                        <Nav.Link href="#" className="nav-text mx-2" ><img src={cart} alt="cart" />  Cart</Nav.Link>
                        <Nav.Link href="/profile" className="nav-text mx-2" ><img src={toggle} alt="toggle"/>  My Account  <img src={avtar} alt={avtar}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default CardHeader ;