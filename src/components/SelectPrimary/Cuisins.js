import React, { useState, useEffect } from 'react';
import '../../styles/selectprimary.scss';
import { Row, Col } from 'react-bootstrap';
import { addPrimaryRequest } from '../../Redux/action/index';
import { useDispatch, useSelector } from 'react-redux';


function Cuisins({handleAlert}) {
    const dispatch = useDispatch()
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    let cuisines = ["North Indian", "South Indian", "Chinese", "Italian"]

    const handlePrimaryCuisines = (val) => {
        let primaryCuisines = QuestionnairesStatus?.primaryCuisine?.length > 0 ? QuestionnairesStatus?.primaryCuisine : []
        if (primaryCuisines.indexOf(val) >= 0) {
            primaryCuisines = [...primaryCuisines]
            primaryCuisines = primaryCuisines.filter(value => value !== val)
        } else {
            primaryCuisines = [...primaryCuisines, ...[val]]
        }
        dispatch(addPrimaryRequest(primaryCuisines))
        handleAlert()
    }

    return (
        <Row>
            {cuisines.map(val => {
                return (
                    <Col xs={6} md={3}>
                        <div className={`${(val == "South Indian") ? "north2" : (val == "North Indian") ? "north1" : (val == "Chinese") ? "north3" : "north4"}   ${QuestionnairesStatus?.primaryCuisine.length && QuestionnairesStatus?.primaryCuisine?.includes(val) ? "north-active" : "north-i"}`}>
                            <p className="north-txt" onClick={() => { handlePrimaryCuisines(val) }} > {val?.toUpperCase()} </p>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}
export default Cuisins;