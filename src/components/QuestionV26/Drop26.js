import React, { useState } from 'react';
import '../../styles/questionv26.scss';
import { Dropdown } from 'react-bootstrap';
import toggle from '../../assests/toggle.svg';
import SelectTime from "./selectDate";
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { addOrdertypeRequest } from '../../Redux/action/index';



function Drop26({ title, icon, showTime,handleAlert }) {
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const [showtime, setShowTime] = useState(false)
    const [time, setTime] = useState("00:00");
    const [startBreakFast, setStartBreakFast] = useState("")
    // const [endBreakfast, setendBreakfast] = useState("00:00 - AM")
    const [startLunch, setStartLunch] = useState("")
    // const [endLunch, setEndLunch] = useState("00:00 - AM")
    const [startDinner, setStartDinner] = useState("")
    // const [endDinner, setEndDinner] = useState("00:00 - AM")
    const dispatch = useDispatch();  
 
    const handleShowTime = () => {
        setShowTime(!showtime)
    }
    const handleCloseTime = () => {
        setShowTime(false)
    }
    const handleBreakfastClick = (e) => {
        setStartBreakFast(e.target.value)

    }

    const handleLunchClick = (e) => {
        setStartLunch(e.target.value)

    }
 
    const handleDinnerClick = (e) => {
        setStartDinner(e.target.value)
    }
    const handleDietary = (val) => {
        let mealType = QuestionnairesStatus?.mealType?.length > 0 ? QuestionnairesStatus?.mealType : []
        if (mealType.indexOf(val) >= 0) {
            mealType = [...mealType]
            mealType = mealType.filter(value => value !== val)
        } else {
            mealType = [...mealType, ...[val]]
        }
        dispatch(addOrdertypeRequest(mealType))
        handleAlert()
        setShowTime(!showtime)
    }
 
    return (
        <>
            <div className="drop-con" >
                <div className={`${(QuestionnairesStatus?.mealType?.indexOf(title) >= 0) ? "drop-btn-active" : "drop-btn"}`} onClick={handleShowTime} >
                    <div className="drop-img">
                        <img src={icon} alt="logo" className="drop-im"   />
                    </div>
                    <div className="text-center title-text" >{title?.toUpperCase()}<span><img src={toggle} alt="toggle" /></span></div>
                    {(startBreakFast || startLunch || startDinner ) ? <p className="show-time  text-center">{(title == "Breakfast") ? `${startBreakFast}` : (title == "Lunch") ? `${startLunch}` : `${startDinner}`}</p> : null }
                </div>
            </div>
            {showtime ? <SelectTime
                handleCloseTime={handleCloseTime}
                title={title} time={time}
                startBreakFast={startBreakFast}
                // endBreakfast={endBreakfast}
                startLunch={startLunch}
                // endLunch={endLunch}
                // endDinner={endDinner}
                startDinner={startDinner}
                handleBreakfastClick={(val) => handleBreakfastClick(val)}
                // handleBreakfastChange={(val) => handleBreakfastChange(val)}
                handleLunchClick={(val) => handleLunchClick(val)}
                // handleLunchChange={(val) => handleLunchChange(val)}
                handleDinnerClick={(val) => handleDinnerClick(val)}
                // handleDinnerChange={(val) => handleDinnerChange(val)}
                handleDietary={(title) => handleDietary(title)}
                 />
                : null}
        </>

    )
}
export default Drop26;