import React, { useState, useEffect } from 'react';
import '../styles/selectprimary.scss';
import Circles from '../components/SelectPrimary/Circles';
import SecondaryCuisins from '../components/SelectSecondary/SeconaryCuisins';
import BackNext from '../components/SelectPrimary/BackNext';
import BackClose from '../components/SelectPrimary/BackClose';
import SecondayProgressbar from '../components/SelectSecondary/SecondayProgressbar';
import ellipse18 from '../assests/ellipse18.png';
import ellipse17 from '../assests/ellipse17.png';
import { useHistory } from "react-router";


function SelectSecondary() {
    const [secondaryCuisines, setSecondaryCuisines] = useState({
        secondaryCuisinesFirst: false,
        secondaryCuisinesSecond: false,
        secondaryCuisinesthird: false,
        secondaryCuisinesFourth: false
    })

    const [option, setOption] = useState([])
    const [secondaryCuisinesType, setsecondaryCuisinesType] = useState()
    const router = useHistory()
    const handleStartPage = () => {
        router.push('/diet')
    }
    const handleBackPage = () => {

        router.push('/selectprimary')
    }
    const handleBack = () => {
        router.push('/')
    }


    const handleCuisines = (val) => {
        if (val == "North Indian") {
            setSecondaryCuisines({ ...secondaryCuisines, secondaryCuisinesFirst: !secondaryCuisines.secondaryCuisinesFirst })
            setsecondaryCuisinesType(val)
        } else if (val == "South Indian") {
            setSecondaryCuisines({ ...secondaryCuisines, secondaryCuisinesSecond: !secondaryCuisines.secondaryCuisinesSecond })
            setsecondaryCuisinesType(val)
        } else if (val == "Chinese") {
            setSecondaryCuisines({ ...secondaryCuisines, secondaryCuisinesthird: !secondaryCuisines.secondaryCuisinesthird })
            setsecondaryCuisinesType(val)
        } else {
            setSecondaryCuisines({ ...secondaryCuisines, secondaryCuisinesFourth: !secondaryCuisines.secondaryCuisinesFourth })
            setsecondaryCuisinesType(val)
        }
    }

    return (
        <>
            <div className="container-sp">
                <p className="select-y text-center"> Select Your Secondary Cuisines! </p>
                <p className="cuisines-text text-center">Choose as many as you like. This is for when you feel you want a change of taste and a little variety. </p>
                <SecondaryCuisins handleCuisines={(val) => handleCuisines(val)} secondaryCuisines={secondaryCuisines} />
            </div>
        </>
    )
}
export default SelectSecondary;