import React from 'react';
import puri from '../../assests/puri.svg';
import SandWich from '../../assests/SandWich.svg';
import Rice from '../../assests/Rice.svg';
import Hot_Sandwich from '../../assests/Hot_Sandwich.svg';
import ChevronRight from '../../assests/ChevronRight.svg';
import Chevronleft from '../../assests/Chevronleft.svg';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, withRouter } from "react-router";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveFoodPlanRequest, selectFoodListRequest } from '../../Redux/action/index';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
function MenuList(props) {
    const [selectedBreakfast, setSelectedBreakfast] = useState([])
    const [selectLunch, setSelectLunch] = useState([])
    const [selectDinner, setSelectDinner] = useState([])
    const dispatch = useDispatch();
    const router = useHistory();
    const selectedFoodStatus = useSelector((state) => state.selectFoodList)
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const handleBack = () => {
        router.push('/questionnaires')
    }
    let foodDetails = {}
    useEffect(() => {
        if (props.match.params.day === "Sunday") {
            let Sunday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Sunday = Sunday;
            dispatch(selectFoodListRequest(foodDetails));
        }
        if (props.match.params.day === "Monday") {
            let Monday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Monday = Monday;
            dispatch(selectFoodListRequest(foodDetails));
        }
        if (props.match.params.day === "Tuesday") {
            console.log("tuesday");
            let Tuesday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Tuesday = Tuesday;
            dispatch(selectFoodListRequest(foodDetails));
        }
        if (props.match.params.day === "Wednesday") {
            console.log("wednesday");
            let Wednesday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Wednesday = Wednesday;
            dispatch(selectFoodListRequest(foodDetails));
        }
        if (props.match.params.day === "Thursday") {
            let Thursday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Thursday = Thursday;
            dispatch(selectFoodListRequest(foodDetails));
        }
        if (props.match.params.day === "Friday") {
            let Friday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Friday = Friday;
            dispatch(selectFoodListRequest(foodDetails));
        }
        if (props.match.params.day === "Saturday") {
            let Saturday = {
                "Breakfast": selectedBreakfast,
                "Lunch": selectLunch,
                "Dinner": selectDinner,
            }
            foodDetails.Saturday = Saturday;
            dispatch(selectFoodListRequest(foodDetails));
        }
    }, [selectedBreakfast, selectLunch, selectDinner])
    const handleNext = () => {
        dispatch(saveFoodPlanRequest({
            "userId": JSON.parse(localStorage.getItem("userid")),
            "choices": {
                "primaryCuisine": QuestionnairesStatus.primaryCuisine,
                "secondaryCuisine": QuestionnairesStatus.secondaryCuisine,
                "foodType": QuestionnairesStatus.foodType,
                "spicy": QuestionnairesStatus.spicy,
                "allergens": QuestionnairesStatus.allergens,
                "day": QuestionnairesStatus.day,
                "mealType": QuestionnairesStatus.mealType
            },
            "foodDetails": selectedFoodStatus
        }))
        router.push('/profile');
    }
    console.log(selectedFoodStatus, "selectedFoodStatus",);
    const handleBreakeFastSelectionItem = (val) => {
        let breakefast = []
        breakefast.push(val)
        setSelectedBreakfast(breakefast)
    }
    const handleLunchSelectionItem = (val) => {
        let lunch = []
        lunch.push(val)
        setSelectLunch(lunch)
    }
    const handleDinnerSelectionItem = (val) => {
        let dinner = []
        dinner.push(val)
        setSelectDinner(dinner)
    }
    useEffect(() => {
        dispatch(selectFoodListRequest(foodDetails));
    }, [props.match.params.day])
    return (
        <>
            <div className="menu-list-items">
                {(props?.dayListMenus?.Breakfast?.length) ?
                    <p className="menu-list-heading ml-3">What Would You Like For Breakfast ? Choose One. </p>
                    : null}
                <div className="d-flex flex-row flex-wrap">
                    {props?.dayListMenus?.Breakfast?.map((val, i) => {
                        return (
                            <div className="menu-item-card-list mx-3" onClick={() => handleBreakeFastSelectionItem(val._id)}>
                                <div className={(selectedBreakfast == val._id) ? "menu-item-card-active" : "menu-item-card"}>
                                    <img src={val?.images[0]?.secure_url} alt={Rice} width="100%" />
                                    <div className="item-card-header">
                                        <p className="item-name">{val.name}</p>
                                    </div>
                                    <p className="text-left item-desc mt-3">{val.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="menu-list-items mt-5 ">
                {(props?.dayListMenus?.Lunch?.length) ?
                    <p className="menu-list-heading ">What Would You Like For Lunch ? Choose One. </p>
                    : null}
                <div className="d-flex flex-row flex-wrap">
                    {props?.dayListMenus?.Lunch?.map(val => {
                        return (
                            <div className="menu-item-card-list mx-3" onClick={() => handleLunchSelectionItem(val._id)}>
                                <div className={(selectLunch == val._id) ? "menu-item-card-active" : "menu-item-card"}>
                                    <img src={val?.images[0]?.secure_url} alt={Rice} width="100%" />
                                    <div className="item-card-header">
                                        <p className="item-name">{val.name}</p>
                                    </div>
                                    <p className="text-left item-desc mt-3">{val.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="menu-list-items mt-5 ">
                {(props?.dayListMenus?.Dinner?.length) ?
                    <p className="menu-list-heading">What Would You Like For Dinner ? Choose One. </p>
                    : null}
                <div className="d-flex flex-row flex-wrap">
                    {props?.dayListMenus?.Dinner?.map(val => {
                        return (
                            <div className="menu-item-card-list mx-3" onClick={() => handleDinnerSelectionItem(val._id)}>
                                <div className={(selectDinner == val._id) ? "menu-item-card-active" : "menu-item-card"}>
                                    <img src={val?.images[0]?.secure_url} alt={Rice} width="100%" />
                                    <div className="item-card-header">
                                        <p className="item-name">{val.name}</p>
                                    </div>
                                    <p className="text-left item-desc mt-3">{val.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="row paggination-row">
                <div className="col">
                    <div onClick={handleBack}><img src={ChevronRight} alt="" /><span className="ml-2" >BACK</span></div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div><button type="submit" onClick={handleNext} >NEXT <img src={Chevronleft} alt="Chevronleft" /></button></div>
                </div>
            </div>
        </>
    )
}
export default withRouter(MenuList);