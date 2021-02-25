import React, { useState } from 'react';
import Western_union_card from '../../assests/Western_union_card.svg';
import visa_card from '../../assests/visa_card.svg';
import Masterd_card from '../../assests/Masterd_card.svg';

function CarditCard({handleActive,checkValue}) {
   
    

    return (
        <div className="cardit-card px-3 d-flex align-items-center  justify-content-between">
            <div className="d-flex flex-row align-items-center ">
                <input type="radio" id="male" name="Cardit Card" checked={checkValue} value="Cardit Card" onClick={handleActive} />
                <p className="cardit-card-text pl-2">Cardit Card</p>
            </div>
            <div className="d-flex flex-row justify-content-around ">
                <img src={visa_card} alt="visa_card" />
                <img src={Masterd_card} alt="Masterd_card" className="px-2" />
                <img src={Western_union_card} alt="Western_union_card" />
            </div>
        </div>
    )
}
export default CarditCard;