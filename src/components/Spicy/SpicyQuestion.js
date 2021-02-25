import React from 'react';
import Spice from '../../assests/Spice.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addSpicyfoodRequest } from '../../Redux/action/index'

export default function SpicyQuestion({ spicyTypes, handleAlert }) {
    const dispatch = useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const spicyFood = ["Mild", "Medium", "Hot"]

    const handleSpicy = (val) => {
        // let spicy = QuestionnairesStatus?.spicy?.length > 0 ? QuestionnairesStatus?.spicy : []
        // console.log(spicy.indexOf(val),"ddddddddddd");
        // if (spicy.indexOf(val) >= 0) {
        //     spicy = [...spicy]
        //     spicy = spicy.filter(value => value !== val)
        // } else {
        //     spicy = [...spicy, ...[val]]
        // }
        dispatch(addSpicyfoodRequest([val]))
        handleAlert()
    }
    return (
        <div>
            <div className="dietaryquestion">
                <div className="dietaryquestion1 text-center">How spicy do you like your food?</div>
                <p className="dietary-text ttext-center">We have chefs cooking different variety of spice level for different taste buds. We will make sure the food tastes excatly the way you want!</p>
                {spicyTypes ? <p className="text-center text-danger">Please Select Atleast One Option</p> : null}
                <div className="options">
                    {spicyFood.map(val => {
                        return (
                            <button type="button" className={`btn  ${(QuestionnairesStatus?.spicy?.indexOf(val) >= 0) ? "vegetarian-active" : "vegetarian"}`} value="Mild" onClick={(e) => handleSpicy(val)}>
                                {val == "Mild" ?
                                    <div>
                                        <img src={Spice} alt="Spicy" />
                                    </div> :
                                    (val == "Medium") ?
                                        <div className="d-flex justify-content-center">
                                            <img src={Spice} alt="Spicy" />
                                            <img src={Spice} alt="Spicy" />
                                        </div> :
                                        <div className="d-flex justify-content-center">
                                            <img src={Spice} alt="Spicy" />
                                            <img src={Spice} alt="Spicy" />
                                            <img src={Spice} alt="Spicy" />
                                        </div>
                                }
                                {val}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}