import React, { useEffect } from 'react';
import '../styles/DietaryRequirement.scss';
import DietaryHeader from '../components/DietaryRequirement/DietaryHeader';
import DietaryProgressbar from '../components/DietaryRequirement/DietProgress';
import DietaryQuestion from '../components/DietaryRequirement/DietaryQuestion';
import BackNext from '../components/SelectPrimary/BackNext';
import ellipse18 from '../assests/ellipse18.png';
import ellipse17 from '../assests/ellipse17.png';
import DietaryFooter from '../components/DietaryRequirement/DietaryFooter';
import { useHistory } from "react-router";
import { useState } from 'react';


export default function DietaryRequirement({ diet , handleAlert}) {
    const [dietary, setDietary] = useState({
        vegetarian: false,
        vegan: false,
        nonnVegetarian: false,
        target_text: "",
        alert: false
    })
    const [option, setOption] = useState([])
    const [dietaryType, setDietaryType] = useState()
    const router = useHistory()
    const handleSpicyFood = () => {
        if (JSON.parse(localStorage.getItem("foodType")).length == 0) {
            setDietary({ ...dietary, alert: true })
        } else {
            router.push('/spicy')
        }
    }

    const handleBackSpicyFood = () => {
        if (JSON.parse(localStorage.getItem("primaryCuisine"))?.length == 4) {
            router.push('/selectprimary')
        } else {
            router.push('/selectsecondary')
        }
    }

    const handleBack = () => {
        router.push('/')
    }

    const handleDietary = (e) => {
        e.preventDefault();
        if (e.currentTarget.value == "Vegetarian") {
            setDietary({ ...dietary, vegetarian: !dietary.vegetarian })
            setDietaryType(e.currentTarget.value);
        } else if (e.currentTarget.value == "Vegan") {
            setDietary({ ...dietary, vegan: !dietary.vegan })
            setDietaryType(e.currentTarget.value);
        } else {
            setDietary({ ...dietary, nonnVegetarian: !dietary.nonnVegetarian })
            setDietaryType(e.currentTarget.value);
        }
    }
    useEffect(() => {
        if (dietary.vegetarian === true) {
            let DietaryList = [...option];
            DietaryList.push(dietaryType)
            setOption(DietaryList)
        } else {
            let DietaryList = [...option];
            let value = "Vegetarian"
            DietaryList = DietaryList.filter(item => item !== value)
            setOption(DietaryList)
        }

    }, [dietary.vegetarian])

    useEffect(() => {
        if (dietary.vegan === true) {
            let DietaryList = [...option];
            DietaryList.push(dietaryType)
            setOption(DietaryList)
        } else {
            let DietaryList = [...option];
            let value = "Vegetarian"
            DietaryList = DietaryList.filter(item => item !== value)
            setOption(DietaryList)
        }
    }, [dietary.vegan])

    useEffect(() => {
        if (dietary.nonnVegetarian === true) {
            let DietaryList = [...option];
            DietaryList.push(dietaryType)
            setOption(DietaryList)
        } else {
            let DietaryList = [...option];
            let value = "Vegetarian"
            DietaryList = DietaryList.filter(item => item !== value)
            setOption(DietaryList)
        }
    }, [dietary.nonnVegetarian])

    useEffect(() => {
        localStorage.setItem("foodType", JSON.stringify(option))
    }, [option])
    return (
        <div>
            <div className="container-sp">
                <DietaryQuestion handleDietary={handleDietary} dietary={dietary} diet={diet} handleAlert={handleAlert}/>
            </div>

        </div>
    )
}