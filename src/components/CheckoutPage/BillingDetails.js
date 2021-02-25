import React from 'react';
import InputDetails from './Inputbox';
function BillingDetails() {
    return (
        <div className="billing-details">
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <p className="feild-name">First Name</p>
                    <InputDetails cardfield="input-details" />
                </div>
                <div className="col-lg-6 mb-3">
                    <p className="feild-name">Last Name</p>
                    <InputDetails cardfield="input-details" inputType="text"/>
                </div>
                <div className="col-lg-12 mb-3">
                    <p className="feild-name">Email Address</p>
                    <InputDetails cardfield="input-details" inputType="text" />
                </div>
                <div className="col-lg-6 mb-3">
                    <p className="feild-name">Shipping Address</p>
                    <InputDetails cardfield="input-details" inputType="email" />
                </div>
                <div className="col-lg-6 mb-3">
                    <p className="feild-name"> State / City</p>
                    <InputDetails cardfield="input-details" inputType="tex" />
                </div>
                <div className="col-lg-6">
                    <p className="feild-name">Zip Code</p>
                    <InputDetails cardfield="input-details" inputType="text"/>
                </div>
            </div>
        </div>
    )
}
export default BillingDetails;