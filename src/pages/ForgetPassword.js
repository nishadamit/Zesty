import React, { useState, useEffect } from 'react';
import '../styles/loginpage.scss';
import LoginInput from '../components/LoginPage/LoginInput';
import LoginBtn from '../components/LoginPage/LoginBtn';
import LoginFooter from '../components/LoginPage/LoginFooter';
import LoginHeader from '../components/LoginPage/LoginHeader';
import Logo from '../assests/logo.svg';
import { useHistory } from "react-router";
import { forgetpassRequest } from "../Redux/action/index";
import { useDispatch, useSelector } from 'react-redux';
import SnackbarAleart from '../components/WarningBox/Warningbox';


const ForgetPassword = () => {
    const [forgetPass, setForgetPass] = useState({
        email: "",
        warningBox: false
    })
    const dispatch = useDispatch();
    const forgetpassStatus = useSelector((state) => state.ForgetPassword)
    const router = useHistory()
    const handleSubmit = () => {
        dispatch(forgetpassRequest({
            "email": forgetPass.email
        }))
    }

    useEffect(() => {
        if (forgetpassStatus?.data?.error == "0") {
            router.push('/login')
        }
        if (forgetpassStatus?.data?.error == "1") {
            setForgetPass({ ...forgetPass, warningBox: true })
        }
    }, [forgetpassStatus])
 
    const handleClose = () =>{
        setForgetPass({ ...forgetPass, warningBox: false })
  
    }
  
    return (
        <div>
            <div className="desktop">
                <LoginHeader logo={Logo} />
                <div className="login-page">
                    {forgetPass.warningBox ?
                        <SnackbarAleart warningShow={forgetPass.warningBox} warnigMessage={forgetpassStatus?.data?.message} handleClose={handleClose}/> : null}
                    <p className="welcome"> Welcome</p>
                    <LoginInput placeholder="Enter Email*" type="email" handleLogin={(e) => { setForgetPass({ ...forgetPass, email: e.target.value }) }} />
                    <LoginBtn handleSubmit={handleSubmit} loder={forgetpassStatus.isLoading} buttonText="Submit" />
                </div>
                <LoginFooter />
            </div>
        </div>
    )
}

export default ForgetPassword;