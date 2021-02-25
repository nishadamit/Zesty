import React, { useState } from 'react';
import DeliveryDayHeader from '../components/DietaryRequirement/DietaryHeader';
import DeliverydayProgress from '../components/DeliveryDay/DeliverDayProgress';
import DeliveryDayContent from '../components/DeliveryDay/DeliveryDayContent';
import DeliveryDayFooter from '../components/DietaryRequirement/DietaryFooter';
import ellipse18 from '../assests/ellipse18.png'
import ellipse17 from '../assests/ellipse17.png'
import BackNext from '../components/SelectPrimary/BackNext';
import { useHistory } from "react-router";


export default function DeliveryDay({deliveryDays,handleAlert}) {
    const [alert, setAlert] = useState(false)

    const router = useHistory()
    const handleSpicyFood = () => {
        if (JSON.parse(localStorage.getItem("day")).length == 0) {
            setAlert(true)
        } else {
            router.push(`/menu/${JSON.parse(localStorage.getItem("day")).length > 0 ? JSON.parse(localStorage.getItem("day"))[0] : 'Sunday'}`)
            var val = {
                "primaryCuisines": JSON.parse(localStorage.getItem("primaryCuisines")),
                "secondaryCuisines": JSON.parse(localStorage.getItem("secondaryCuisines")),
                "deliveryDay": JSON.parse(localStorage.getItem("deliveryDay")),
                "mealType": localStorage.getItem("mealTiming"),
                "foodType": JSON.parse(localStorage.getItem("dietaryRequirement")),
                "allergens": JSON.parse(localStorage.getItem("allergyFood")),
                "extraMention": localStorage.getItem("extraMention"),
                "spicy": JSON.parse(localStorage.getItem("spicyFood")),
                "orderFor": localStorage.getItem("orderFor"),
            }
        }
    }
    const handleBackSpicyFood = () => {
        router.push('/breakefast')
    }
    const handleBack = () => {
        router.push('/')
    }
    const handleMealTiming = () => {

    }

    return (
        <div>
            <DeliveryDayHeader handleBack={handleBack} />
            <div className="container-sp">
                <DeliveryDayContent handleDeliveryDay={handleMealTiming} deliveryDays={deliveryDays} handleAlert={handleAlert}/>
            </div>
        </div>
    )
}