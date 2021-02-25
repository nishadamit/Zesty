import React from 'react';
import '../../styles/loginpage.scss';

export default function MobileTop({logo}) {
    return (
        <div className="mobile-top">
            <div className="mobHeader mobbg">
                <div className="d-flex justify-content-center appLogo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="personalChef">
                    Your own Personal Chef
            </div>
                <div className="welcometozesty">Welcome back to <span className="Zesty">Zesty!</span></div>
                <div className="loremIpsum">
                    Lorem ipsum dolor sit amet, consecteur adipiscing elit.
                    Nibh tincidunt nunc vitae egestas enim orci aliquam. Id
                    nulla vel various tortor, elit pharetra.
            </div>
            </div>
        </div>
    )
}