import React, { useState, useEffect } from 'react';
import '../styles/questionv26.scss'
import FoodTimingProgress from '../components/QuestionV26/FoodTimingProgressbar';
import ellipse18 from '../assests/ellipse18.png'
import ellipse17 from '../assests/ellipse17.png'
import BackClose from '../components/SelectPrimary/BackClose'
import BackNext from '../components/SelectPrimary/BackNext';
import Drop26 from '../components/QuestionV26/Drop26';
import { Col, Row } from 'react-bootstrap';
import icon1 from '../assests/1.png'
import icon2 from '../assests/2.png'
import icon3 from '../assests/3.png'
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { addOrdertypeRequest } from '../Redux/action/index';

function QuestionV26({ mealtimes ,handleAlert}) {
    const [time, setTime] = useState({
        breakfast: false,
        lunchTime: false,
        dinner: false,
        alert: false,
    })

    const handleBreakfastShowTime = () => {
        setTime({ ...time, breakfast: !time.breakfast })
    }
  

    const dispatch = useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const titletype = ["Breakfast", "Lunch", "Dinner"]

 

  


    return (
        <>
            <div className="container-sp26 ">
                <p className="select-y26 text-center mb-5">
                    Would you like to order for breakfast, lunch or dinner ? </p>
                {mealtimes ? <p className="text-center text-danger ">Please select Atleast One Option</p> : null}
                <Row className="">
                    {titletype.map(val => {
                        return (
                            <Col xs={12} md={4}>
                                <Drop26 showtime={time.showtime} title={val} icon={icon1} handleShowTime={handleBreakfastShowTime} showTime={QuestionnairesStatus?.mealType}  handleAlert={handleAlert} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}
export default QuestionV26;