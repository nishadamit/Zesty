import React from "react";
import profile_img from '../../assests/profile_img.svg';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assests/logo.svg';
import '../../styles/Profile.scss';



function ProfileHeader() {
    const handleLogout = () =>{
        localStorage.removeItem("accessToken");
    }
    return (
        <div style={{backgroundColor: "black"}}>
            <Navbar collapseOnSelect expand="lg" className="bg-black">
                <div className="d-flex flex-column">
                    <Navbar.Brand ><img  src={logo} alt="Platoo" /></Navbar.Brand>
                    <p>Your Own Personal Chef</p>
                </div>     
                <Nav className="mr-auto">
                </Nav>
                <Nav >
                    <Nav.Link href="#home" className="nav-text mx-2 mt-3" >Wade Warren</Nav.Link>
                    <img src={profile_img} onClick={handleLogout} alt="profile_img" />
                </Nav>
            </Navbar>
        </div>
    )
}
export default ProfileHeader;