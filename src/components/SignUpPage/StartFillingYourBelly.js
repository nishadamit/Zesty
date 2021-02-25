import React from 'react';
import '../../styles/SignUpPage.scss'

export default function StartFillingYourBelly() {
    return (
        <div className="StartFillingYourBelly">
            Start Filling Your Belly
            <hr className="hline" />
            <div className="required">
                Fields marked <span className="star">*</span> are required
            </div>
        </div>
    )
}