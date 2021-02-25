import React from 'react';
import AppLogo from '../../assests/logo.svg';

export default function MobileHeader(){
    return(
        <div className="mobHeader mobbg">
            <div className="d-flex justify-content-center appLogo">
                <img src={AppLogo} alt="..."/>
            </div>
            <div className="personalChef">
                Your own Personal Chef
            </div>
            <div className="welcometozesty">Welcome to <span className="Zesty">Zesty!</span></div>
            <div className="loremIpsum">
                Lorem ipsum dolor sit amet, consecteur adipiscing elit.
                Nibh tincidunt nunc vitae egestas enim orci aliquam. Id
                nulla vel various tortor, elit pharetra.
            </div>
        </div>
    )
}