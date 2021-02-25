import React from 'react';
import '../../styles/selectprimary.scss';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { useHistory } from "react-router";
import {useSelector} from 'react-redux';


function BackNext({handleStartPage , handleBackPage , buttonType}) {

    return (
        <div className="back-close">
            <div className="left-f1" onClick={handleBackPage}>
                <ChevronLeft /> BACK
                 </div>
            <div className="right-f">
                
                <button className="next-btn" onClick={handleStartPage}> {buttonType} <ChevronRight /> </button>
            </div>
            <div className="clear">
            </div>
        </div>
    )
}
export default BackNext;