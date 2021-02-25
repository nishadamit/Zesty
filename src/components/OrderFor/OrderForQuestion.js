import React from 'react';
import Personal from '../../assests/OrderforPersonal.svg';
import Couple from '../../assests/OrderForCouple.svg';
import Family from '../../assests/OrderForFamily.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderforRequest } from '../../Redux/action/index';

export default function OrderForQuestion({ orderFors,handleAlert }) {
    const OrderFor = ["Personal", "Couple", "Family"]

    const dispatch = useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)

    const handleOrderFor = (val) => {

        dispatch(addOrderforRequest(val))
        handleAlert()
    }
    return (
        <div className="dietaryquestion">
            <div className="dietaryquestion1 text-center mb-5">Order For?</div>
            {orderFors ? <p className="text-center text-danger">Please Select Atleast On Option</p> : null}
            <div className="options">
                {OrderFor.map(val => {
                    return (
                        <button type="button" className={`btn btn-outline ${(QuestionnairesStatus?.orderFor?.indexOf(val) >= 0) ? "vegetarian-active" : "vegetarian"}`} value="Personal" onClick={() => handleOrderFor(val)}>
                            <div><img src={Personal} alt="Personal" /></div>
                            {val}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}