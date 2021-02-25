import React from 'react';
import logo from '../../assests/logo.svg';
import { useHistory } from "react-router";


export default function MealHeader() {
    const router = useHistory()
    const handlePrimaryCuisines = () => {
        router.push('/questionnaires')
    }
    return (
        <div className="mealCenter">
            <img className="meallogo" src={logo} alt="..." />
            <div className="mealtagline">Your own Personal Chef</div>
            <div className="autopilot">Designing the perfect homemade menu for you. </div>
            <div className="foodchoice">Tell us about your food choices and preferences in a few short questions to help us  </div>
            <div className="foodchoice">personalise your experience. </div>
            <button className="startbutton" onClick={handlePrimaryCuisines}>START</button>
            <button className="startbuttonmobile" onClick={handlePrimaryCuisines}>Let's Go</button>
        </div>
    )
}