import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDietaryRequest } from '../../Redux/action/index';
export default function DietaryQuestion({diet,handleAlert }) {
    const dispatch = useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const dietary = ["Vegetarian", "Vegan", "Non Vegetarian"]

    const handleDietary = (val) => {
        let foodType = QuestionnairesStatus?.foodType?.length > 0 ? QuestionnairesStatus?.foodType : []
        if (foodType.indexOf(val) >= 0) {
            foodType = [...foodType]
            foodType = foodType.filter(value => value !== val)
        } else {
            foodType = [...foodType, ...[val]]
        }
        dispatch(addDietaryRequest(foodType))
        handleAlert()
    }


    return (
        <div className="dietaryquestion">
            <div className="dietaryquestion1 text-center">What is your dietary requirement?</div>
            <p className="dietary-text text-center">If you would like to alternate between 2 or even 3 options, you can choose more than one.</p>
            {diet ? <p className="text-center text-danger">Please Select Atleast One Dietary</p> : null}
            <div className="options d-flex">
                {dietary.map(val => {
                    return (
                        <button type="button" className={`btn  ${(QuestionnairesStatus?.foodType?.indexOf(val) >= 0) ? "vegetarian-active" : "vegetarian"}`} value={"Vegetarian"} onClick={() => handleDietary(val)}>{val}</button>
                    )
                })}
            </div>
        </div>
    )
}