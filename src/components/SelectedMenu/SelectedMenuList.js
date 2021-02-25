import React from 'react';
import puri from '../../assests/puri.svg';
import SandWich from '../../assests/SandWich.svg';
import Rice from '../../assests/Rice.svg';
import Hot_Sandwich from '../../assests/Hot_Sandwich.svg';
import ChevronRight from '../../assests/ChevronRight.svg';
import Chevronleft from '../../assests/Chevronleft.svg';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, withRouter } from "react-router";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function MenuList(props) {

    const dispatch = useDispatch();
    const router = useHistory();
    const selectedFoodStatus = useSelector((state) => state.selectFoodList)
    const handleBack = () => {
        router.push('/deliveryday')
    }

    return (
        <>
            {(props?.dayListMenus?.Breakfast?.length) ?
                <div className="menu-list-items">
                    <p className="menu-list-heading ml-3">What Would You Like For Breakfast ? Choose One. </p>
                    <div className="d-flex flex-row flex-wrap">
                        {props?.dayListMenus?.Breakfast?.map(val => {
                            return (
                                <div className="menu-item-card-list mx-3" >
                                    <div className="menu-item-card">
                                        <img src={Rice} alt="Rice" width="100%" />
                                        <div className="item-card-header">
                                            <p className="item-name">{val.name}</p>
                                        </div>
                                        <p className="text-left item-desc mt-3">{val.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                : <Spinner animation="border" role="status" style={{ position: "absolute", top: "80%", left: "60%" }}>
                    <span className="sr-only">Loading...</span>
                </Spinner>}

            <div className="menu-list-items mt-5 ">
                {(props?.dayListMenus?.Lunch?.length) ?
                    <p className="menu-list-heading ">What Would You Like For Lunch ? Choose One. </p>
                    : null}
                <div className="d-flex flex-row flex-wrap">
                    {props?.dayListMenus?.Lunch?.map(val => {
                        return (
                            <div className="menu-item-card-list mx-3" >
                                <div className="menu-item-card">
                                    <img src={Rice} alt="Rice" width="100%" />
                                    <div className="item-card-header">
                                        <p className="item-name">{val.name}</p>
                                    </div>
                                    <p className="text-left item-desc mt-3">{val.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="menu-list-items mt-5 ">
                {(props?.dayListMenus?.Dinner?.length) ?
                    <p className="menu-list-heading">What Would You Like For Dinner ? Choose One. </p>
                    : null}
                <div className="d-flex flex-row flex-wrap">
                    {props?.dayListMenus?.Dinner?.map(val => {
                        return (
                            <div className="menu-item-card-list mx-3" >
                                <div className="menu-item-card">
                                    <img src={Rice} alt="Rice" width="100%" />
                                    <div className="item-card-header">
                                        <p className="item-name">{val.name}</p>
                                    </div>
                                    <p className="text-left item-desc mt-3">{val.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="row paggination-row">
                <div className="col">
                    <div><img src={ChevronRight} alt="" /><span className="ml-2" onClick={handleBack}>BACK</span></div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div><button type="submit" onClick={handleNext} >NEXT <img src={Chevronleft} alt="Chevronleft" /></button></div>
                </div>
            </div>
        </>
    )
}

export default withRouter(SelectedMenuList);