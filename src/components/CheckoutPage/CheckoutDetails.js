import React,{useState} from 'react';
import Checkout_Vector from '../../assests/Checkout_Vector.svg';
import BillingDetails from '../../components/CheckoutPage/BillingDetails';
import PaymentMathod from '../../components/CheckoutPage/PaymentMathod';
import ConfirmCheckoutButton from '../../components/CheckoutPage/ConfirmCheckoutbutton';
import ChoosePlan from './ChoosePlan';
// import ActivePlanCard from '../CartPages/ActivePlanCard';
function CheckoutDetails({clickMe}) {

    return (
        <div className="checkout-page">
            <p className="checkout-paging">Home  <img src={Checkout_Vector} alt="Checkout_Vector"/> Checkout</p>
            <p className="billing-heading">Billing Details</p>
            <div className="row">
                <div className="col-lg-8 mt-5">
                  <BillingDetails />
                  <PaymentMathod clickMe={clickMe}/>
                  <ConfirmCheckoutButton clickMe={clickMe}/>
                </div>
                <div className="col-lg-4 my-5">
                    <ChoosePlan />
                </div>
            </div>
        </div>
    )
}
export default CheckoutDetails;