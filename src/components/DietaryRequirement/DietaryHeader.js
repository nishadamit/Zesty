import React from 'react';
import '../../styles/MealLandingPage.scss';
import { ChevronLeft, X} from 'react-bootstrap-icons';
import logo from '../../assests/logo.svg';


export default function DietaryHeader({handleBack }){
   
   
    return(
        <div className="mealHeader">
            {/* <img className="mealBack" src={logo} alt="" onClick={handleBack}/> */}
            {/* <a className="mealBack" onClick={handleBack} ><ChevronLeft/> BACK</a> */}
        </div>
    )
}