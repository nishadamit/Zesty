import React, { useState, useEffect } from 'react';
import SignUpInput from '../SignUpPage/SignUpInput';
import SignUpBtn from './SignUpBtn';
import { getSignUpRequest } from '../../Redux/action/index';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";


export default function Credentials({signUp,handleChange ,handleMealLanding}) {
  


    return (
        <>
            {/* <div className="credential">
                <SignUpInput type="text" name="firstName" value={signUp.firstName} placeholder="First Name*" handleChange={(e) => { setSignUp({ ...signUp, firstName: e.target.value }) }} />
                <SignUpInput type="text" name="lastName" placeholder="Last Name*" value={signUp.firstName} handleChange={(e) => { setSignUp({ ...signUp, lastName: e.target.value }) }} />
                <SignUpInput type="email" placeholder="Email Address*" handleChange={(e) => { setSignUp({ ...signUp, email: e.target.value }) }} />
                <SignUpInput type="password" placeholder="Password*" handleChange={(e) => { setSignUp({ ...signUp, password: e.target.value }) }} />
                <SignUpInput type="password" placeholder="Password Confirm*" handleChange={(e) => { setSignUp({ ...signUp, confirmPassword: e.target.value }) }} />
            </div>
            <SignUpBtn handleMealLanding={handleMealLanding} buttonText="Sign Up" loder={SignUpStatus.isLoading}/> */}

        </>
    )
}