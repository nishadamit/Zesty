import React from 'react';
import meal_feature from '../../assests/meal_feature.svg';
import meal_desc from '../../assests/meal_desc.svg';
import home_meal_feature from '../../assests/home_meal_feature.svg';
import home_meal_desc from '../../assests/home_meal_desc.svg';
import Vector from '../../assests/Vector.svg';
import Why_Zesty from '../../assests/Why_Zesty.svg';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router";


function LandingFeatures() {
    const router = useHistory()
    const handleMenu = () => {
        router.push('/meallanding')
    }


    return (
        <div className="mt-5 meal_feature">
            <Row className=" row1">
                <Col lg={1}>
                </Col>
                <Col lg={5} >
                    <img src={meal_feature} alt="meal_feature" width="100%"></img>
                </Col>
                <Col lg={5} className="mt-4">
                    <p className="meal_feature_heading">Save 24 Hours Every Week</p>
                    <p className="meal_feature_text">Automating your Meals With Zesty Will Give A Day Back To You Every Week! </p>
                    <div className="row ml-2 "><div className="col-1 icon "><img src={Vector} alt="Vector" /> </div><p className="col-10 meal_feature_text">Homemade meals cooked exactly the way you like. </p></div>
                    <div className="row ml-2 "><div className="col-1 icon"><img src={Vector} alt="Vector" /> </div><p className="col-10 meal_feature_text">As you use Zesty more, we get better at personalising the menu according to your taste and eating habits. </p></div>
                    <div className="row ml-2 "><div className="col-1 icon"><img src={Vector} alt="Vector" /> </div><p className="col-10 meal_feature_text">Don't worry about grocery shopping for the right ingredients anymore or cleaning up your dishes after an appetising meal. </p></div>
                    <button type="submit" className="button" onClick={handleMenu}>Subscribe Now</button>
                </Col>
                <Col lg={1} className="d-flex align-items-center">
                    <img src={meal_desc} alt="meal_desc" className="meal_desc"></img>
                </Col>
            </Row>
            <Row className="mt-4 row2 ">
                <Col lg={1} className="d-flex align-items-center">
                    <div className="d-flex justify-content-center flex-column">
                        <img src={home_meal_desc} alt="home_meal_desc" className="home_meal_desc"></img>
                    </div>
                </Col>
                <Col lg={5} className="mt-3">
                    <p className="meal_feature_heading">We Think About Great Meal Ideas Just For You</p>
                    <p className="meal_feature_text">As We Learn About The Cuisines You Like And Your Diet Requirements. Our Algorithm Designs Custom Menus For You! </p>
                    <div className="row ml-2 "><div className="col-1 icon"><img src={Vector} alt="Vector" /> </div><p className="col-10  meal_feature_text">Don't have to fight decision fatigue about "what to cook next"</p></div>
                    <div className="row ml-2 "><div className="col-1 icon"><img src={Vector} alt="Vector" /> </div><p className="col-10 meal_feature_text">Amazing variety from the best chefs specialised in cooking the particular cuisines. </p></div>
                    <div className="row ml-2 "><div className="col-1 icon"><img src={Vector} alt="Vector" /> </div><p className="col-10 meal_feature_text">Made fresh and healthy, making sure it's tasty as well as affordable. </p></div>
                    <button type="submit" className="button mt-5" onClick={handleMenu}>Get Your Meal Now</button>
                </Col>
                <Col lg={5}>
                    <img src={home_meal_feature} alt="home_meal_feature" width="100%"></img>
                </Col>
            </Row>
            <Row className="mt-4 mb-5 row3">
                <Col lg={1}>
                </Col>
                <Col lg={5}>
                    <img src={Why_Zesty} alt="Why_Zesty" className="mx-auto d-block zesty_img" width="80%" ></img>
                </Col>
                <Col lg={6} className="mt-5">
                    <p className="meal_feature_heading1">Why Zesty? </p>
                    <p className="meal_feature_subheading">Spend just 5 Minutes preparing your weekly meals.</p>
                    <p className="meal_feature_text1">Subscribe for weekly or monthly options and let Zesty take care of your every day breakfast, lunch and dinner.</p>
                    <p className="meal_feature_text1">As you continue using Zesty, our software learns about your likes and dislikes and matches you like. We work with the most talented and divers chefs so that you don't have to worry about what to cook for dinner or waste time doing groceries and cleaning.</p>
                    <p className="meal_feature_text1">Unlike restaurant delivery companies where prices are too expensive and the food is not something you can eat for every meal and every day, Zesty makes sure the prices are the most affordable and uses technology to keep the meals personalised according to you.</p>
                    <p className="meal_feature_text1">We have diverse cuisines ranging from North Indian, Chinese, Italian to Filipino, Arabic and South Indian. We will keep adding more cuisines and chefs on our platform based on your choices and feedback. </p>
                    <p className="meal_feature_text1">The meals are prepared fresh everyday and deliverd ready to eat. you don't have to cook the ingredients or even heat the dish. </p>
                </Col>
            </Row>
        </div>
    )
}
export default LandingFeatures;