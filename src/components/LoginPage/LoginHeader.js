import React from 'react';
import '../../styles/loginpage.scss';
import {useHistory} from "react-router";


export default function LoginHeader({logo}) {
    const router = useHistory();
    const handleHome = () => {
        router.push('/')
    }

    return (
        <img src={logo} alt="logo" className="logo" onClick={handleHome}/>
    )
}