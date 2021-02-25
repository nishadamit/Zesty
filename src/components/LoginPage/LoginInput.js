import React from 'react';
import '../../styles/loginpage.scss';
import { propTypes } from 'react-bootstrap/esm/Image';

function LoginInput({ placeholder, handleLogin, type }) {
    return (

        <input className="login-input" type={type} placeholder={placeholder} onChange={handleLogin} required />
    )
}
export default LoginInput;