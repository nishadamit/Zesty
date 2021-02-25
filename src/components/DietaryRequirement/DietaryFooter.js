import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { useHistory } from "react-router";

export default function DietaryFooter({ handleSpicyFood ,handleBackSpicyFood}) {
    const router = useHistory()
    // const handlebackPage = () => {
    //     router.push('/selectprimary')
    // }
    
    return (
            <div className="mealHeader">
                <a className="mealBack" onClick={handleBackSpicyFood}><ChevronLeft/>BACK</a>
                <button className="nextdiet mealClose btn " onClick={handleSpicyFood}>NEXT <ChevronRight/></button>            
            </div>
    )
}