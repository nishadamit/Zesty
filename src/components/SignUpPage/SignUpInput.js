import React from 'react';
import '../../styles/SignUpPage.scss';

function LoginInput(props) {
    return (
        <input
            className="signup-input"
            type={props.type}
            name=""
            id=""
            placeholder={props.placeholder}
            onChange={(e) =>props.handleChange(e) }
            required
        />
    )
}
export default LoginInput;