import React from 'react';
import '../../styles/loginpage.scss';

export default function MobileBottom() {
    return (
        <div className="mobile-bottom">
            <div className="sign-in1"> Sign In </div>
            <div className="login-to">
                <p>Login to your account. consectetur adipiscing elit. Nibh tincidunt nunc </p>
            </div>
            <p className="email-add"> Email Address </p>
            <input type="text" className="email-input" />
            <p className="password-login"> Password  </p>
            <input type="text" className="pass-input" />
            <a href="id" className="lost-p"> Lost your password ?</a>
            <br />
            <button className="sign-in"> Sign In </button>
        </div>

    )
}