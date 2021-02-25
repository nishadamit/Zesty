import React, { useState, useEffect } from 'react';
import '../styles/loginpage.scss';
import LoginInput from '../components/LoginPage/LoginInput';
import LoginBtn from '../components/LoginPage/LoginBtn';
import LoginLink from '../components/LoginPage/LoginLink';
import LoginFooter from '../components/LoginPage/LoginFooter';
import LoginHeader from '../components/LoginPage/LoginHeader';
import Logo from '../assests/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassRequest } from '../Redux/action/index';
import {  withRouter } from "react-router";




function ForgetLanding(props) {
    const [login, setLogin] = useState({
        confirmPassword: "",
        password: "",

    })
    const dispatch = useDispatch();
    const updatePassStatus = useSelector((state) => state.UpdatePassword)
    console.log();
    const handleSubmit = () => {
        if (login.confirmPassword === login.password) {
            dispatch(updatePassRequest({
                "id": props.match.params.id,
                "password": login.password
            }))
        }
    }

    useEffect(() => {
        console.log(updatePassStatus , "ddddddddfdddddd");
        if (updatePassStatus?.data?.error == "0") {
            // router.push('/login')
            props.history.push('/login')
        }
    }, [updatePassStatus])

    return (
        <div>
            <div className="desktop">
                <LoginHeader logo={Logo} />
                <div className="login-page">
                    <p className="welcome"> Update Password</p>
                    <LoginInput placeholder="Password" type="password" handleLogin={(e) => { setLogin({ ...login, password: e.target.value }) }} />
                    <LoginInput placeholder="Confirm Password*" type="password" handleLogin={(e) => { setLogin({ ...login, confirmPassword: e.target.value }) }} />
                    <LoginBtn handleSubmit={handleSubmit} loder={updatePassStatus.isLoading} buttonText="Submit"/>
                </div>
                <LoginFooter />
            </div>
        </div>
    )
}
export default withRouter(ForgetLanding);