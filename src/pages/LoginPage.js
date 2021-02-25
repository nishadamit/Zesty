import React, { useState } from 'react';
import '../styles/loginpage.scss';
import LoginInput from '../components/LoginPage/LoginInput';
import LoginBtn from '../components/LoginPage/LoginBtn';
import LoginLink from '../components/LoginPage/LoginLink';
import LoginFooter from '../components/LoginPage/LoginFooter';
import LoginHeader from '../components/LoginPage/LoginHeader';
import MobileTop from '../components/LoginPage/MobileTop';
import MobileBottom from '../components/LoginPage/MobileBottom';
import Logo from '../assests/logo.svg'
import googleIcon from '../assests/google-icon.png'
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getLoginRequest, getSocialRequest } from '../Redux/action/index';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { withRouter } from "react-router";
import { useEffect } from 'react';
import EmailCart from '../components/EmailCart';
import SnackbarAleart from '../components/WarningBox/Warningbox';



function LoginPage(props) {
    const [login, setLogin] = useState({
        email: "",
        password: "",
        fbFirstName: "",
        fbLastName: "",
        fbUserId: "",
        fbEmailId: "",
        warningBox: false
    })
    const [showModal, setShowModal] = useState(false)
    const [fbUserEmail, setFbUserEmail] = useState("")
    const dispatch = useDispatch()
    const loginStatus = useSelector((state) => state.Login)
    const socialLoginStatus = useSelector((state) => state.SocialLogin)
    const router = useHistory()

    const handleFbEmail = (e) => {
        setFbUserEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(login.email !== "" && login.password !== ""){
            
            dispatch(getLoginRequest({
                "email": login.email,
                "password": login.password
            }))
        }

    }


    const responseGoogle = (response) => {
        console.log(response.nt, "response1");
        console.log(response.nt.Wt, "response2");
        console.log(response.nt.fT, "response14");
        console.log(response.nt.dV, "response13");

        dispatch(getSocialRequest({
            "name": {
                "first": response.nt.dV,
                "last": response.nt.fT,
            },
            "email": response.nt.Wt,
            "isadmin": false
        }))
    }


    const responseFacebook = (response) => {
        console.log(response, "response");
        setLogin({ ...login, fbFirstName: response.name, fbLastName: response.name, fbUserId: response.userID })
        if (response.status == !"not_authorized") {
            setShowModal(true)
        }

    }

    const handleSubmitEmail = () => {
        console.log(login.fbFirstName, fbUserEmail, "fbUserEmail34");
       
            dispatch(getSocialRequest({
                "name": {
                    "first": login.fbFirstName,
                    "last": login.fbLastName,
                },
                "email": fbUserEmail,
                "isadmin": false
            }))
        
    }

    useEffect(() => {
        console.log(loginStatus, "props");
        console.log(localStorage.getItem("accessToken"), "eee");
        if (loginStatus.data.error === 0) {
            if (props.history.location.pathname == "/menu/login") {
                router.push('/cart')
            } else {
                router.push('/')
            }
        }
        if (loginStatus.data.error === 1) {
            setLogin({ ...login, warningBox: true })

        }
    }, [loginStatus])

    const handleSignUpRedirect = () => {
        router.push('/signup')
    }

    useEffect(() => {
        if (socialLoginStatus.isSuccess == true) {
            if (props.history.location.pathname == "/menu/login") {
                router.push('/cart')
            } else {
                router.push('/')
            }
        }
    }, [socialLoginStatus])

    const handleForgetPassword = () => {
        router.push('/forgetPassword')
    }
    const handleClose = () => {
        setLogin({ ...login, warningBox: false })

    }

    return (
        <div>
            <div className="desktop">
                <LoginHeader logo={Logo} />
                <div className="login-page">
                    {login.warningBox ?
                        <SnackbarAleart warningShow={login.warningBox} warnigMessage={loginStatus?.data?.message} handleClose={handleClose} /> : null}
                    <p className="welcome"> Welcome</p>
                    <form onSubmit={(e) => handleSubmit(e)} >
                        <LoginInput placeholder="Email Address*" type="email" handleLogin={(e) => { setLogin({ ...login, email: e.target.value }) }} />
                        <LoginInput placeholder="Password*" type="password" handleLogin={(e) => { setLogin({ ...login, password: e.target.value }) }} />
                        <LoginBtn loder={loginStatus.isLoading} type="submit"  buttonText="Login" />
                    </form>
                    <EmailCart showModal={showModal} handleFbEmail={(e) => handleFbEmail(e)} handleSubmitEmail={handleSubmitEmail} />
                    <p className="login-link2" onClick={handleForgetPassword}>Forget Password ?</p>  <br />
                    <div className="flex-center">
                        <p className="login-link2">Don't have an account ?</p>
                        <p className="login-link3" onClick={handleSignUpRedirect}>Signup Here</p>
                    </div>
                    <div className="or"> Or </div>

                    <div className="facebook-btn">
                        <FacebookLogin
                            appId="695755674680942"
                            fields="name,email,picture"
                            className="facebook-login"
                            textButton="CONTINUE WITH FACEBOOK"
                            icon="fa-facebook"
                            callback={responseFacebook} />
                    </div>
                    <div className="google-btn">
                        <GoogleLogin
                            clientId="691543766390-mug9md8msu7osumej27vtqmdp78u2tr5.apps.googleusercontent.com"
                            buttonText="CONTINUE WITH GOOGLE"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="gmail-login"
                        />
                    </div>
                    <div className="flex-center">
                        <p className="login-link2">Want to cook on Zesty?</p>
                        <p className="login-link3">Signup as a Chef</p>
                    </div>
                </div>
                <LoginFooter />
            </div>
        </div>
    )
}
export default withRouter(LoginPage);