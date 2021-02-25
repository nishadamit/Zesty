import React from 'react';
import secure from '../../assests/secure.svg';
import Western_union_card from '../../assests/Western_union_card.svg';
import visa_card from '../../assests/visa_card.svg';
import Masterd_card from '../../assests/Masterd_card.svg';
import InputDetails from './Inputbox';

function CarditInformations() {
    return (
        <div className="cardit-box mt-4 px-3">
            <div className="cardit-header d-flex  align-items-center justify-content-between">
                <p className="carder-header-text">Cardit Card information</p>
                <div className="d-flex ">
                    <img src={secure} alt="secure" />
                    <p className="secure-server ">Secure Server</p>
                </div>
            </div>
            <div className="mr-5 mt-4">
                <p className="card-field-name">Card Number</p>
                <div className="row" >
                    <div className="col-lg-8">
                    <InputDetails cardfield="card-feild-inbox"  inputType="tel" />
                    </div>
                    <div className="col-lg-4 ">
                        <img src={visa_card} alt="visa_card" />
                        <img src={Masterd_card} alt="Masterd_card" className="px-2" />
                        <img src={Western_union_card} alt="Western_union_card" />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-lg-8">
                        <p className="card-field-name">Expiration <span>*</span></p>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                            <InputDetails cardfield="card-feild-inbox"  inputType="tel"  placeholder="Month"/>
                            </div>
                            <div className="col-lg-6 mb-3">
                               <InputDetails cardfield="card-feild-inbox" inputType="tel" placeholder="year"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <p className="card-field-name">CVC <span>*</span></p>
                        <InputDetails cardfield="card-feild-inbox"  inputType="text"/>
                    </div>
                </div>
                <div className="card-holder-name">
                    <p className="card-field-name">Name On Card</p>
                    <InputDetails cardfield="card-feild-inbox" inputType="text" />
                </div>
                <div className="mt-3 d-flex ">
                    <input type="checkbox" />
                    <div className="pl-3">
                        <p className="save-cradit-information">Save cardit card information for the next time.</p>
                        <p className="future-checkout">This will enabel instant checkout in future.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarditInformations; 