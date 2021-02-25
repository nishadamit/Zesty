import React, { useState, useEffect } from 'react';
import '../styles/questionv36.scss'
import Allergy from '../components/QuestionV36/Allergy'
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { allergiesListRequest } from '../Redux/action/index';


function QuestionV36() {
    const [allergy, setAllery] = useState({
        peanuts: false,
        eggs: false,
        dairy: false,
        shellfish: false,
        wheat: false,
        others: false,
        none: false
    })
    // const allergyList = ["Peanuts", "Eggs", "Dairy", "Shellfish", "Wheat", "Others", "None"]
    const [buttonType, setButtonType] = useState("Next")
    const [option, setOption] = useState([])
    const [allergiesType, setAllergiesType] = useState()
    const [allergyList, setAllergyList] = useState({})
    const dispatch = useDispatch();
    const allergiesListStatus = useSelector((state) => state.AllergiesList)
    const router = useHistory()
    const handleBackPage = () => {
        router.push('/spicy')
    }
    const handleStartPage = () => {
        router.push('/orderfor')
    }
    const handleBack = () => {
        router.push('/')
    }
    const handleAllergy = (val) => {
        if (val == "Peanuts") {
            setAllery({ ...allergy, peanuts: !allergy.peanuts })
            setAllergiesType(val)
        } else if (val == "Eggs") {
            setAllery({ ...allergy, eggs: !allergy.eggs })
            setAllergiesType(val)
        } else if (val == "Dairy") {
            setAllery({ ...allergy, dairy: !allergy.dairy })
            setAllergiesType(val)
        } else if (val == "Shellfish") {
            setAllery({ ...allergy, shellfish: !allergy.shellfish })
            setAllergiesType(val)
        } else if (val == "Wheat") {
            setAllery({ ...allergy, wheat: !allergy.wheat })
            setAllergiesType(val)
        } else if (val == "Others") {
            setAllery({ ...allergy, others: !allergy.others })
            setAllergiesType(val)
        }
        else {
            setAllery({ ...allergy, none: !allergy.none })
            setAllergiesType(val)
        }
    }

    useEffect(() => {
        if (allergy.peanuts === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "Peanuts"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }

    }, [allergy.peanuts])

    useEffect(() => {
        if (allergy.eggs === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "Eggs"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }
    }, [allergy.eggs])

    useEffect(() => {
        if (allergy.dairy === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "Dairy"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }
    }, [allergy.dairy])

    useEffect(() => {
        if (allergy.shellfish === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "Shellfish"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }
    }, [allergy.shellfish])

    useEffect(() => {
        if (allergy.wheat === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "Wheat"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }
    }, [allergy.wheat])

    useEffect(() => {
        if (allergy.others === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "Others"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }
    }, [allergy.others])

    useEffect(() => {
        if (allergy.none === true) {
            let allergiesList = [...option];
            allergiesList.push(allergiesType)
            setOption(allergiesList)
        } else {
            let allergiesList = [...option];
            let value = "None"
            allergiesList = allergiesList.filter(item => item !== value)
            setOption(allergiesList)
        }
    }, [allergy.none])

    useEffect(() => {
        localStorage.setItem("allergens", JSON.stringify(option))
    }, [option])

    useEffect(() => {
        let status = Object.values(allergy).find(val => val == true) ? true : false
        if (status == true) {
            setButtonType("Next")
        }
        else {
            setButtonType("Skip")
        }
    }, [allergy])

    useEffect(() =>{
        if(allergiesListStatus.data){
            setAllergyList(allergiesListStatus)
        }
        
    },[allergiesListStatus])

    useEffect(() => {
        dispatch(allergiesListRequest())
    }, [])

    return (
        <>
            <div className="container-sp36">
                <p className="select-y36 text-center mb-5"> What allergies do you have, if any ? </p>
                <Allergy title={allergyList} handleAllergy={handleAllergy} allergy={allergy} />
            </div>
        </>
    )
}
export default QuestionV36;