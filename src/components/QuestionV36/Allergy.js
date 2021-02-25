import React from 'react';
import '../../styles/selectprimary.scss';
import { Col, Row } from 'react-bootstrap';
import { addAllergiesRequest } from '../../Redux/action/index';
import { useDispatch, useSelector } from 'react-redux';


function Allergy({title }) {
    console.log(title?.data?.length,"allergiesListStatus");   

    const allergies = ["Peanuts", "Eggs", "Dairy", "Shellfish", "Wheat", "Others"]

    const dispatch = useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)

    const handleAllergy = (val) => {
        let allergens = QuestionnairesStatus?.allergens?.length > 0 ? QuestionnairesStatus?.allergens : []
        if (allergens.indexOf(val) >= 0) {
            allergens = [...allergens]
            allergens = allergens.filter(value => value !== val)
        } else {
            allergens = [...allergens, ...[val]]
        }
        dispatch(addAllergiesRequest(allergens))
    }

    return (
        <Row>
            {title?.data?.length ?
            title?.data?.map(val => {
                return (
                    <Col xs={6} md={3} className="algergies-hover">
                        <div className="allergy-con" className={`${(QuestionnairesStatus?.allergens?.indexOf(val.name) >= 0) ? "allergy-con-active" : "allergy-con"}`} onClick={(e) => handleAllergy(val.name)}>
                            <p className="allergy-itm" value={"Peanuts"}> {val.name} </p>
                        </div>
                    </Col>
                )
            }) : null }
        </Row>
    )
}
export default Allergy;