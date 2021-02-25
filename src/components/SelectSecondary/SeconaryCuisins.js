import React, { useState } from 'react';
import '../../styles/selectprimary.scss';
import { Row, Col } from 'react-bootstrap';
import { addSecondaryRequest } from '../../Redux/action/index';
import { useDispatch, useSelector } from 'react-redux';
function SecondaryCuisins({ primaryCuisines, secondaryCuisines }) {
    const dispatch = useDispatch()
    const [secondaryCuisine, setSecondaryCuisine] = useState(JSON.parse(localStorage.getItem('secondaryCuisine')) ? JSON.parse(localStorage.getItem('secondaryCuisine')) : [])
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const primarySelectedList = localStorage.getItem("primaryCuisine");
    let options = [];
    let cuisines = ["North Indian", "South Indian", "Chinese", "Italian"]
    let secondaryList = cuisines.filter(value => !QuestionnairesStatus?.primaryCuisine?.includes(value))
    if (Object.values(JSON.parse(primarySelectedList))) {
        const propertyNames = Object.values(JSON.parse(primarySelectedList))
        propertyNames.map(value => {
            cuisines = cuisines.filter(val => val !== value)
        })
    }
    const handleSecondaryCuisines = (val) => {
        let secondaryCuisines = QuestionnairesStatus.secondaryCuisine?.length > 0 ? QuestionnairesStatus?.secondaryCuisine : []
        if (secondaryCuisines.indexOf(val) >= 0) {
            secondaryCuisines = [...secondaryCuisines]
            secondaryCuisines = secondaryCuisine.filter(value => value !== val)
        } else {
            secondaryCuisines = [...secondaryCuisines, ...[val]]
        }
        // setSecondaryCuisine(secondaryCuisines)
        dispatch(addSecondaryRequest(secondaryCuisines))
        // localStorage.setItem("secondaryCuisine", JSON.stringify(secondaryCuisines))
    }
    return (
        <Row>
            {secondaryList.map(val => {
                return (
                    <Col xs={6} md={3}>
                        <div className={`${(val == "South Indian") ? "north2" : (val == "North Indian") ? "north1" : (val == "Chinese") ? "north3" : "north4"}   ${(QuestionnairesStatus?.secondaryCuisine?.indexOf(val) >= 0) ? "north-active" : "north-i"}`}>
                            <p className="north-txt" onClick={() => { handleSecondaryCuisines(val) }} > {val?.toUpperCase()} </p>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}
export default SecondaryCuisins;