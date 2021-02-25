import React, { useEffect, useState } from 'react';
import SubscriptionBox from './SubscriptionBox';

function ProfileSubscription({ ShowFoodPlanStaus }) {
    const [cuisinesList, setCuisinesList] = useState({})
    useEffect(() => {
        if (ShowFoodPlanStaus?.data) {
            setCuisinesList(ShowFoodPlanStaus?.data?.choices)
        }

    }, [ShowFoodPlanStaus])



    return (
        <div className="subsciption">
            <p className="active-plan">Your Weekly Food Plan</p>
            <div className="questionnaires-details">
                <p className="text-center choices-list">Your Choices in Questionnaire</p>
                <div className="row ml-2">
                    <div>
                        <div className="d-flex">
                            <p className="choices-list ">Primary_Cuisine :</p>
                            {cuisinesList?.Primary_Cuisine?.map((val) => {

                                return (
                                    <p className="pl-4">{val}</p>
                                )
                            })}
                        </div>
                        {cuisinesList?.Secondary_Cuisine ?
                            <div className="d-flex">
                                <p className="choices-list">Secondary_Cuisine :</p>
                                {cuisinesList?.Secondary_Cuisine?.map((val) => {
                                    return (
                                        <p className="pl-4">{val}</p>
                                    )
                                })}
                            </div> : null}
                        <div className="d-flex">
                            <p className="choices-list">Spice_Level :</p>
                            {cuisinesList?.Spice_Level?.map((val) => {
                                return (
                                    <p className="pl-4">{val}</p>
                                )
                            })}
                        </div>
                        <div className="d-flex">
                            <p className="choices-list">Meal_Types :</p>
                            {cuisinesList?.Meal_Types?.map((val) => {
                                return (
                                    <p className="pl-4">{val}</p>
                                )
                            })}
                        </div>
                        <div className="d-flex">
                            <p className="choices-list"> Meal_Timing :</p>
                            {cuisinesList?.Meal_Timing?.map((val) => {
                                return (
                                    <p className="pl-4">{val}</p>
                                )
                            })}
                        </div>
                        <div className="d-flex">
                            <p className="choices-list">Days :</p>
                            {cuisinesList?.Days?.map((val) => {
                                return (
                                    <p className="pl-4">{val}</p>
                                )
                            })}
                        </div>
                        {cuisinesList?.Allergens ?
                            <div className="d-flex">
                                <p className="choices-list">Allergens :</p>
                                {cuisinesList?.Allergens?.map((val) => {
                                    return (
                                        <p className="pl-4">{val}</p>
                                    )
                                })}
                            </div> : null}
                    </div>
                    <div className=" col-lg-2 col-md-6 mb-2" >
                    </div>
                </div >
            </div >
            <div className="row mt-5">
                <div className=" col-lg-4 col-md-6 mb-4" >
                    <SubscriptionBox ShowFoodPlanStatu={ShowFoodPlanStaus} />
                </div>
                <div className=" col-lg-4 col-md-6 mb-4" >
                    <SubscriptionBox />
                </div>
                <div className=" col-lg-4 col-md-6 mb-4" >
                    <SubscriptionBox />
                </div>
            </div>

        </div >
    )
}
export default ProfileSubscription;