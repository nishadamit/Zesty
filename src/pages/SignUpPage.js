import React, { useState, useEffect } from 'react';
import Header from '../components/SignUpPage/Header';
import StartFillingYourBelly from '../components/SignUpPage/StartFillingYourBelly';
import Credentials from '../components/SignUpPage/Credentials'
import SignUpBtn from '../components/SignUpPage/SignUpBtn';
import SignUpFooter from '../components/SignUpPage/SignUpFooter';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import SignUpInput from '../components/SignUpPage/SignUpInput';
import { getSignUpRequest } from '../Redux/action/index';
import SnackbarAleart from '../components/WarningBox/Warningbox';


export default function SignUpPage() {
    const disptach = useDispatch()
    const router = useHistory()

    const SignUpStatus = useSelector((state) => state.SignUp)

    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        warningBox: false
    })

    useEffect(() => {
        if (SignUpStatus.data.error === 0) {
            router.push('/')
        }
        if (SignUpStatus.data.error === 1) {
            setSignUp({ ...signUp, warningBox: true })
        }

    }, [SignUpStatus])

    const handleMealLanding = (e) => {
       e.preventDefault()
        if (signUp.firstName !== ""  && signUp.lastName !== "" && signUp.email !== "" && signUp.password !== "" && signUp.confirmPassword !== "" && signUp.confirmPassword == signUp.password) {
            disptach(getSignUpRequest({
                "name": {
                    "first": signUp.firstName,
                    "last": signUp.lastName
                },
                "email": signUp.email,
                "password": signUp.password,
                "isadmin": false
            }))
        }

    }
    const handleClose = () => {
        setSignUp({ ...signUp, warningBox: true })

    }

    return (
        <div>
            <div className="desktopView">
                <Header />
                {signUp.warningBox ?
                    <SnackbarAleart warningShow={signUp.warningBox} warnigMessage={SignUpStatus?.data?.message} handleClose={handleClose} /> : null}
                <StartFillingYourBelly />
                <form onSubmit={(e) =>handleMealLanding(e)}>
                    <div className="credential">
                        <SignUpInput type="text" name="firstName" value={signUp.firstName} placeholder="First Name*" handleChange={(e) => { setSignUp({ ...signUp, firstName: e.target.value }) }} />
                        <SignUpInput type="text" name="lastName" placeholder="Last Name*" value={signUp.firstName} handleChange={(e) => { setSignUp({ ...signUp, lastName: e.target.value }) }} />
                        <SignUpInput type="email" placeholder="Email Address*" handleChange={(e) => { setSignUp({ ...signUp, email: e.target.value }) }} />
                        <SignUpInput type="password" placeholder="Password*" handleChange={(e) => { setSignUp({ ...signUp, password: e.target.value }) }} />
                        <SignUpInput type="password" placeholder="Password Confirm*" handleChange={(e) => { setSignUp({ ...signUp, confirmPassword: e.target.value }) }} />
                    </div>
                    <SignUpBtn type="submit" buttonText="Sign Up" loder={SignUpStatus.isLoading} />
                </form>

                {/* <Credentials handleMealLanding={handleMealLanding} signUp={signUp} handleChange={(e) => { setSignUp({ ...signUp, firstName: e.target.value , }) }}/> */}
                <SignUpFooter />
            </div>
        </div>
    )
}