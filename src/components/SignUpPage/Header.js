import React from 'react';
import Logo from '../../assests/logo.svg';
import {useHistory} from "react-router";

export default function Header() {
    const router = useHistory();
    const handleHome = () => {
        router.push('/')
    }
    return (
        <div>
            <img src={Logo} alt="logo" onClick={handleHome}/>
        </div>
    )
}