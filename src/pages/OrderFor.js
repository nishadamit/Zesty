import React from 'react';
import OrderForHeader from '../components/DietaryRequirement/DietaryHeader';
import OrderForProgressbar from '../components/OrderFor/OrderProgress';
import OrderForQuestion from '../components/OrderFor/OrderForQuestion';
import BackNext from '../components/SelectPrimary/BackNext';
import ellipse18 from '../assests/ellipse18.png';
import ellipse17 from '../assests/ellipse17.png';
import { useHistory } from "react-router";
import { useState } from 'react';


export default function OrderFor({orderFors,handleAlert}) {
   
    const router = useHistory()
    const handleSpicyFood = () => {
       
    }
    const handleBackSpicyFood = () => {
    }
    const handleBack = () => {
    }
    const handleOrderFor = (e) => {
       
    }
    return (
        <div>
            <div className="container-sp">
                <OrderForQuestion handleOrderFor={handleOrderFor} orderFors={orderFors} handleAlert={handleAlert}/>
            </div>
        </div>
    )
}