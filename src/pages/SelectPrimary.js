import React, { useState, useEffect } from 'react';
import '../styles/selectprimary.scss';
import BackClose from '../components/SelectPrimary/BackClose'
import BackNext from '../components/SelectPrimary/BackNext';
import Circles from '../components/SelectPrimary/Circles';
import Cuisins from '../components/SelectPrimary/Cuisins';
import ellipse18 from '../assests/ellipse18.png';
import ellipse17 from '../assests/ellipse17.png';
import { useHistory } from "react-router";
import { useSelector } from  "react-redux";


function SelectPrimary({primary ,handleAlert}) {
    console.log(primary,"primary");
   
    const [alert , setAlert] = useState(false)
    const router = useHistory()
    

    const handleStartPage = () => {
        
    }
    const handleBackPage = () => {
        router.push('/meallanding')
    }
    const handleBack = () => {
        router.push('/')
    }

    const handleCuisines = (val) => {
     
    }




    return (
        <>
            <div className="container-sp">
                <p className="select-y text-center"> Select Your Primary Cuisines! </p>
                <p className="cuisines-text text-center">This is your favourite choice, the cuisines you could eat upto 5 days in a week and it forms the staple of your diet. </p>
                <div className="py-1" >
                {primary ?
                    <p className="text-center text-danger">Please Select Atleast One Cuisine</p> : null}
                </div>
               
                <Cuisins handleCuisines={handleCuisines} handleAlert={handleAlert}  />
                {/* <BackNext buttonType="Next" handleStartPage={handleStartPage} handleBackPage={handleBackPage} /> */}
            </div>
            {/* <Circles ellipse17={ellipse17} ellipse18={ellipse18} /> */}
        </>
    )
}
export default SelectPrimary;