import React from 'react';
import '../../styles/loginpage.scss';

function LoginLink({ loginClass, href, text }) {
    return (
        <span className="login-span">
            <a className={loginClass} href={href}> {text} </a>
        </span>
    )
}
export default LoginLink;