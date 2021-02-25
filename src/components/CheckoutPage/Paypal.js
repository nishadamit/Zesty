import React from 'react';
import paypal from '../../assests/paypal.svg'

function Paypal({clickMe, paymentType}) {
    return (
        <div className="cardit-card my-4 px-3 d-flex align-items-center  justify-content-between" onClick={clickMe}>
            <div className="d-flex flex-row align-items-center ">
            {paymentType == "Paypal" ?  <input type="radio" id="male" name="Cardit Card" value="Cardit Card" /> : null }
                <p className="cardit-card-text pl-2">{paymentType}</p>
            </div>
            {paymentType == "Paypal" ? 
            <div className="d-flex flex-row justify-content-around ">
                <img src={paypal} alt="paypal" />
            </div> : null}
        </div>
    )
}
export default Paypal;