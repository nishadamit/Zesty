import React from 'react';
import location_icon from '../../assests/location_icon.svg';
import location_vector from '../../assests/location_vector.svg';
import '../../styles/landing.scss'
import lunch_box from "../../assests/lunch_box.svg";
import { useHistory } from "react-router";


function LandingHeader() {
    const router = useHistory()
    const handleMenu = () => {
        router.push('/meallanding')
    }

    return (
        <div className="landing-header row">
            <div className=" col-sm-6  d-flex heading-content flex-column ml-5 mr-3">
                <p className="text-start  landing-heading">Personalised fresh home cooked   </p>
                <p className="text-start  landing-heading">food, delivered daily. </p>
                <p className="text-start  landing-heading">Put your meals on <span>Autopilot</span> </p>
                <p className="text-start  landing-heading"> and forget worrying about your next meal. </p>
                <p className="landing-desc mt-4">STARTING FROM AED 60/WEEK. </p>
                <p className="landing-desc line">Save Up To 4 Hours Everyday By Never Having To Cook Again. </p>
                <p className="landing-desc">Monthly & Weekly Plans Included! </p>
                <button type="submit" className="btn Join-now" onClick={handleMenu}>Get Started</button>
                <p className="delivery-fee text-white">*NO DELIVERY FEE.</p>
            </div>
            <div className="col-sm-5 ">
                <img src={lunch_box} alt="" width="100%" />
            </div>
        </div>
    )
}
export default LandingHeader;