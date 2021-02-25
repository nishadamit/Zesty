import React from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import logo from '../../assests/logo.svg';
import toggle_icon from '../../assests/toggle-icon.svg';
import profile_img from '../../assests/profile_img.svg';
import { useHistory } from "react-router";


function HomeNavbar({ menupage }) {
    const router = useHistory()
    const handleLogin = () => {
        if (menupage) {
            router.push('/menu/login')
        } else {
            router.push('/login')
        }
    }
    const handleSignUp = () => {
        router.push('/Signup')
    }
    const handleReturnHome = () => {
        router.push('/')
    }
    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        router.push('/')
    }
    const handleProfile = () => {
        router.push('/profile')
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <div className="d-flex flex-column">
                    <Navbar.Brand ><img src={logo} alt="Platoo" onClick={handleReturnHome} /></Navbar.Brand>
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
                        {localStorage.getItem("accessToken") ?
                            <>
                                <Nav.Link className="nav-text mx-2" onClick={handleLogout}>Logout</Nav.Link>
                                <Nav >
                                    <img src={profile_img} alt="profile_img" onClick={handleProfile} />
                                </Nav></>
                            :
                            <><Nav.Link className="nav-text mx-2" onClick={handleLogin}>Login</Nav.Link>
                                <button className="sign-up" onClick={handleSignUp}> SignUp</button></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
        </div>
    )
}
export default HomeNavbar;