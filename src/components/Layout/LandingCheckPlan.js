import React, { useState } from 'react';
import check_meal from "../../assests/check_meal.svg";
import customer_review from '../../assests/customer_review.svg';
import { Carousel } from 'react-bootstrap';
import ChevronRight from '../../assests/carouselleft.svg';
import Chevronleft from '../../assests/carouselright.svg';


function LandingCheckPlan() {
    const [index, setIndex] = useState(0);
    const [carousel, setCarouset] = useState({
        direction: null,
        prevIcon: <img src={ChevronRight} alt="ChevronRight" />,
        nextIcon: <img src={Chevronleft} alt="Chevronleft" />,
    })

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="customer-review">
            <p className="customer-review-heading text-center mt-5">What Our Customers Says</p>
            <Carousel nextIcon={carousel.nextIcon} prevIcon={carousel.prevIcon} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <div className="customer-review-box">
                            <img src={customer_review} alt="customer_review" />
                            <p className="customer-name">Tomothy Howkins</p>
                            <p className="media-buyer ">Media-buyer @ Nilsen Group</p>
                            <p className="customer-review-desc text-center px-4 ">"It is very important for us to keep abreast of the latest devlopments and  to navigate freely  in the information space, the resources of Medialogy allow us to do this. Every day we can conduct operational monitoring of the media and analyze data online, the saves the time of analysts and journalists." </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <div className="customer-review-box">
                            <img src={customer_review} alt="customer_review" />
                            <p className="customer-name ">Tomothy Howkins</p>
                            <p className="media-buyer ">Media-buyer @ Nilsen Group</p>
                            <p className="customer-review-desc text-center px-4">"It is very important for us to keep abreast of the latest devlopments and  to navigate freely  in the information space, the resources of Medialogy allow us to do this. Every day we can conduct operational monitoring of the media and analyze data online, the saves the time of analysts and journalists." </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <div className="customer-review-box">
                            <img src={customer_review} alt="customer_review" />
                            <p className="customer-name ">Tomothy Howkins</p>
                            <p className="media-buyer ">Media-buyer @ Nilsen Group</p>
                            <p className="customer-review-desc text-center px-4">"It is very important for us to keep abreast of the latest devlopments and  to navigate freely  in the information space, the resources of Medialogy allow us to do this. Every day we can conduct operational monitoring of the media and analyze data online, the saves the time of analysts and journalists." </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default LandingCheckPlan;