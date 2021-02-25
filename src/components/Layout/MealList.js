import React from 'react';
import { Card } from 'react-bootstrap';
import create_menu from '../../assests/create_menu.svg';
import automate_meals from '../../assests/automate_meals.svg';
import perfect_menu from '../../assests/perfect_menu.svg';
import meal_list1 from '../../assests/meal_list1.svg';
import meal_list2 from '../../assests/meal_list2.svg';
import logo from '../../assests/feature_icon.svg';

function MealCardList() {
    return (
        <div>
            <p className="text-center meal-list-heading ">How Zesty Does it's Magic<span><img src={logo} alt="logo" /></span></p>
            <div className="meal-card-list row">
                <div className="meal_list1 col-lg-1 d-flex align-items-end">
                    <img src={meal_list1} alt="create-menu" className="create-menu"></img>
                </div>
                <div className="meal-card col-lg-3 mx-3">
                    <div className="card-item">
                        <img src={create_menu} alt="create-menu" className="mt-2"></img>
                        <p className="card-heading text-center">Understanding your choices </p>
                        <p className="card-desc text-center">Tell us your cuisine preferences and diet requirements so we know your eating habits exactly </p>
                    </div>

                </div>
                <div className="meal-card col-lg-3 mx-3">
                    <div className="card-item">
                        <img src={perfect_menu} alt="create-menu" className="mt-2"></img>
                        <p className="card-heading text-center">Perfect Menu Design</p>
                        <p className="card-desc text-center">Based on your answers, we match you with the right chefs to design a personalised menu and cook food that is delicious, affordable,healthy & homemade. </p>
                    </div>
                </div>
                <div className="meal-card col-lg-3 mx-3">
                    <div className="card-item">
                        <img src={automate_meals} alt="create-menu" className="mt-2"></img>
                        <p className="card-heading text-center">Automate Your Meal </p>
                        <p className="card-desc text-center">Get fresh food delivered daily every week, automate your meals and enjoy the better things </p>
                    </div>
                </div>

                <div className="meal_list2 col-lg-1 d-flex align-items-start justify-content-end">
                    <img src={meal_list2} alt="create-menu" className="create-menu"></img>
                </div>
            </div>
        </div>
    )
}

export default MealCardList;