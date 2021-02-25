import React,{useState} from 'react';
import CarditCard from './CarditCard';
import CarditInformations from './CarditInformation';
import Paypal from './Paypal';

function PaymentMathod({clickMe}) {
    const [checkValue, setCheckvalue] = useState(false)

    const handleActive = (e) => {
        setCheckvalue(!checkValue)
    }
    return (
        <>
            <div className="payment">
                <p className="payment-heading">Payment Mathod</p>
                {/* <CarditCard checkValue={checkValue} handleActive={handleActive}/>
                {checkValue ?
                <CarditInformations /> : null }
                <Paypal paymentType="Paypal"/> */}
                {/* <Paypal clickMe={clickMe} paymentType="Dapi"/> */}
            </div>
        </>
    )
}

export default PaymentMathod;