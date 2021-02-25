import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';



function SubscriptionBox({ ShowFoodPlanStatu }) {

    const [selectedDay, setSelectetDay] = useState([])
    const [foodList, setFoodList] = useState({})
    useEffect(() => {
        if (ShowFoodPlanStatu?.data) {
            let dayList = Object.keys(ShowFoodPlanStatu?.data);
            let dayLists = Object.values(ShowFoodPlanStatu?.data);
            setFoodList(ShowFoodPlanStatu?.data)
            setSelectetDay(dayList)
        }
    }, [ShowFoodPlanStatu])
    // let filtertListItem = ["enddate","startdate","choices"]

    // let filterdayList = selectedDay.map(val =>{
    //     filtertListItem.filter((res) => res == val )
    // })

    let selectedDayList = selectedDay.slice(0, selectedDay.length - 3)
    console.log(selectedDayList, "filterdayList");


    return (
        <div className="subscription-box">
            {selectedDayList.map(val => {
                return (
                    <div>
                        <p className="text-center " style={{ color: "#E1BE57" }}>{val}</p>
                        {foodList[val]?.Breakfast.length ?
                            <div className="d-flex">
                                <p className="pl-2" style={{ color: "#E1BE57" }}>BreakFast:</p>
                                <div className="d-flex flex-wrap">
                                    {foodList[val]?.Breakfast?.map(value => {
                                        return (
                                            <p className="text-center px-2">{value.name}</p>
                                        )
                                    })}
                                </div>
                            </div> : null}
                        {foodList[val]?.Lunch.length ?
                            <div className="d-flex">
                                <p className="pl-2" style={{ color: "#E1BE57" }}>Lunch:</p>
                                <div className="d-flex flex-wrap">
                                    {foodList[val]?.Lunch?.map(value => {
                                        return (
                                            <p className="text-center px-2">{value.name}</p>
                                        )
                                    })}
                                </div>
                            </div> : null}
                        {foodList[val]?.Lunch.length ?
                            <div className="d-flex">
                                <p className="pl-2" style={{ color: "#E1BE57" }}>Dinner:</p>
                                <div className="d-flex flex-wrap">
                                    {foodList[val]?.Lunch?.map(value => {
                                        return (
                                            <p className="text-center px-2">{value.name}</p>
                                        )
                                    })}
                                </div>
                            </div> : null }
                    </div>
                )
            }
            )}
        </div>
    )
}
export default SubscriptionBox;