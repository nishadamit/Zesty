import React, { useState, useEffect } from 'react';
import '../../styles/DietaryRequirement.scss';
import '../../styles/DeliveryDay.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addDeliveryRequest } from '../../Redux/action/index';

export default function DeliveryDayContent({ handleMealTiming, deliveryDays , handleAlert}) {


    const deliveryday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dispatch = useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)

    const handledeliveryday = (val) => {
        let day = QuestionnairesStatus?.day?.length > 0 ? QuestionnairesStatus?.day : []
        if (day.indexOf(val) >= 0) {
            day = [...day]
            day = day.filter(value => value !== val)
        } else {
            day = [...day, ...[val]]
        }
        dispatch(addDeliveryRequest(day))
        handleAlert()
    }


    return (
        <div className="dietaryquestion">
            <div className="dietaryquestion1 text-center">What days would you like the food to be delivered?</div>
            {deliveryDays ? <p className="text-center text-danger">Please Select Atleast One Day</p> : null}

            <div className="options-day">
                {deliveryday.map(val => {
                    return (
                        <button class={`btn  ${(QuestionnairesStatus?.day?.indexOf(val) >= 0) ? "dayActive" : "day"} `} value="Monday" onClick={(e) => handledeliveryday(val)}>{val.substring(0, 3).toUpperCase()}</button>

                    )
                })}
            </div>
        </div>
    )
}


