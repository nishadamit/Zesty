import React from 'react';

export default function MobileForm() {
    return (
        <div className="mobile-bottom">
            <div className="sign-in1">
                Sign Up
            </div>
            <div className="login-to">
                <p>
                    Login to your account. consectetur adipiscing elit.
                    Nibh tincidunt nunc
                </p>
            </div>
            <p className="email-add">
                Full Name
            </p>
            <input type="text" className="email-input" />
            <p className="email-add">
                Email Address
            </p>
            <input type="text" className="email-input" />
            <p className="password-login">
                Password
            </p>
            <input type="password" className="pass-input" />
            <br />
            <button className="sign-in">
                Sign Up
            </button>
        </div>
    )
}