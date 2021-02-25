import React, { useState, useEffect } from 'react';
import SpicyProgress from '../components/Spicy/SpicyProgressbar';
import SpicyHeader from '../components/DietaryRequirement/DietaryHeader';
import SpicyQuestion from '../components/Spicy/SpicyQuestion';
import BackNext from '../components/SelectPrimary/BackNext';
import ellipse18 from '../assests/ellipse18.png';
import ellipse17 from '../assests/ellipse17.png';
import { useHistory } from "react-router";


export default function Spicy({spicyTypes, handleAlert}) {
    const [spicy, setSpicy] = useState({
        mild: false,
        medium: false,
        hot: false,
        alert : false
    })
    const [option, setOption] = useState([])
    const [spicyType, setSpicyType] = useState()

    const router = useHistory()
    const handleSpicyFood = () => {
        if (JSON.parse(localStorage.getItem("spicy")).length == 0) {
            setSpicy({...spicy , alert : true})
        } else {
            router.push('/allergies')
        }
    }
    const handleBackSpicyFood = () => {
        router.push('/diet')
    }
    const handleBack = () => {
        router.push('/')
    }
    const handleSpicy = (e) => {
        e.preventDefault()
        if (e.currentTarget.value == "Mild") {
            setSpicy({ ...spicy, mild: !spicy.mild })
            setSpicyType(e.currentTarget.value);
        } else if (e.currentTarget.value == "Medium") {
            setSpicy({ ...spicy, medium: !spicy.medium })
            setSpicyType(e.currentTarget.value);
        } else {
            setSpicy({ ...spicy, hot: !spicy.hot })
            setSpicyType(e.currentTarget.value);
        }
    }

    useEffect(() => {
        if (spicy.mild === true) {
            let spicyList = [...option];
            spicyList.push(spicyType)
            setOption(spicyList)
        } else {
            let spicyList = [...option];
            let value = "Mild"
            spicyList = spicyList.filter(item => item !== value)
            setOption(spicyList)
        }

    }, [spicy.mild])

    useEffect(() => {
        if (spicy.medium === true) {
            let spicyList = [...option];
            spicyList.push(spicyType)
            setOption(spicyList)
        } else {
            let spicyList = [...option];
            let value = "Medium"
            spicyList = spicyList.filter(item => item !== value)
            setOption(spicyList)
        }
    }, [spicy.medium])

    useEffect(() => {
        if (spicy.hot === true) {
            let spicyList = [...option];
            spicyList.push(spicyType)
            setOption(spicyList)
        } else {
            let spicyList = [...option];
            let value = "Hot"
            spicyList = spicyList.filter(item => item !== value)
            setOption(spicyList)
        }
    }, [spicy.hot])

    useEffect(() => {
        localStorage.setItem("spicy", JSON.stringify(option))
    }, [option])

    return (
        <div>
            <div className="container-sp">
            <SpicyQuestion handleSpicy={handleSpicy} spicy={spicy} spicyTypes={spicyTypes} handleAlert={handleAlert}/>
            </div>
        </div>
    )
}