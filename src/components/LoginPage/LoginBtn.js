import React from 'react';
import '../../styles/loginpage.scss';
import {Spinner} from 'react-bootstrap';

function LoginBtn({ handleSubmit, loder,buttonText , type}) {

    return (
        <button className="login-btn" type={type} onClick={handleSubmit}>
            {loder ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                : buttonText}
        </button>
    )
}
export default LoginBtn;