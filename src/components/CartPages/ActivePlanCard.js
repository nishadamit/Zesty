import React from 'react';
import {useHistory} from "react-router";

function ActivePlanCard () {
    const router = useHistory()
    const handleMeal = () =>{
        router.push('/menu')
    }
    return(
        <div className="active-plan-card d-flex flex-column py-3 pl-3 justify-content-center">
         <div className="plan-type d-flex justify-content-start">
             <p className="plan-type-text">Active Plan-</p>
             <button className="button" onClick={handleMeal}>Weekly</button>
         </div>
         <div className="day-left d-flex justify-content-start mt-4 ">
             <p className="day-left-text">Days Left : </p>
             <p className="day-time">6 : 12 : 56</p>
         </div>
        </div>
    )
}
export default ActivePlanCard;