import React from 'react';
import '../../styles/selectprimary.scss';
import { ChevronLeft, X } from 'react-bootstrap-icons';
import logo from '../../assests/logo.svg';



function BackClose({ handleBack }) {

    return (
        <div className="question-header">
            <div className="left-f" onClick={handleBack}>
                <img src={logo} alt="logo"  />
            </div>
        </div>
    )
}
export default BackClose;