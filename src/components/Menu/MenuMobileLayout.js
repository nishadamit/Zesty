import React, { useState, useEffect } from 'react';
import Saturday_dish_1 from '../../assests/Saturday_dish_1.svg';
import sort_icon from '../../assests/sort_icon.svg';
import DishCard from './Dishcard';
import DayList from './DayList';
import ChevronRight from '../../assests/ChevronRight.svg';
import Chevronleft from '../../assests/Chevronleft.svg';
import { useHistory,withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { saveFoodPlanRequest, selectFoodListRequest } from '../../Redux/action/index';
function MenuMobileLayout(props) {
    const [dayListShow, setDaylistShow] = useState(false)
    const [selectedBreakfast, setSelectedBreakfast] = useState([])
    const [selectLunch, setSelectLunch] = useState([])
    const [selectDinner, setSelectDinner] = useState([])
    const router = useHistory();
    const dispatch = useDispatch();
    const selectedFoodStatus = useSelector((state) => state.selectFoodList)
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const handleDayList = () => {
        setDaylistShow(!dayListShow)
    }
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
        if (localStorage.getItem("accessToken")) {
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
            router.push('/profile');
        } else {
            router.push('/login')
        }
    }
    const handleBreakeFastSelectionItem = (val) => {
        let breakefast = []
        breakefast.push(val._id)
        setSelectedBreakfast(breakefast)
    }
    const handleLunchSelectionItem = (val) => {
        let lunch = []
        lunch.push(val._id)
        setSelectLunch(lunch)
    }
    const handleDinnerSelectionItem = (val) => {
        let dinner = []
        dinner.push(val._id)
        setSelectDinner(dinner)
    }
    console.log(props.dayList, "dayLists");
    useEffect(() => {
        dispatch(selectFoodListRequest(foodDetails));
    }, [props.match.params.day])
    return (
        <div className="menu-mobile-layout">
            <div className="saturday-menu mb-5">
                <div className="d-flex justify-content-between mx-3">
                    <div>
                        <p className="menu-day">{props.match.params.days}</p>
                        <p className="menu-date">12/10/20</p>
                    </div>
                    <div>
                        <p className="select-day" onClick={handleDayList}>Select A Day</p>
                    </div>
                </div>
                {dayListShow ? <DayList dayLists={props.dayLists} /> : null}
                {(props.dayListMenus?.Breakfast?.length) ?
                    <p className="breakefast-menu mx-3 mt-3">What Would You Like For Breakfast ? Choose One. </p> : null}
                <div className="breakefast-dish">
                    < DishCard dayListMenus={props.dayListMenus?.Breakfast} selectedish={selectedBreakfast} handleSelectIten={(val) => handleBreakeFastSelectionItem(val)} />
                </div>
                {(props.dayListMenus?.Lunch?.length) ?
                    <p className="breakefast-menu mx-3 mt-5">What Would You Like For Lunch ? Choose One. </p> : null}
                <div className="breakefast-dish">
                    < DishCard dayListMenus={props.dayListMenus?.Lunch} selectedish={selectLunch} handleSelectIten={(val) => handleLunchSelectionItem(val)} />
                </div>
                {(props.dayListMenus?.Dinner?.length) ?
                    <p className="breakefast-menu mx-3 mt-5">What Would You Like For Dinner ? Choose One. </p> : null}
                <div className="breakefast-dish">
                    < DishCard dayListMenus={props.dayListMenus?.Dinner} selectedish={selectDinner} handleSelectIten={(val) => handleDinnerSelectionItem(val)} />
                </div>
            </div>
            <div className="row paggination-row">
                <div className="col">
                    <div className="previous-button"><img src={ChevronRight} alt="" /><span className="ml-2" onClick={handleBack}>BACK</span></div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div><button type="submit" onClick={handleNext} >NEXT <img src={Chevronleft} alt="Chevronleft" /></button></div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MenuMobileLayout);