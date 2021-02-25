import React from 'react';
import '../styles/MealLandingPage.scss';
import MealPage from '../components/MealLandingPage/MealPage';
import { useHistory } from "react-router";


export default function MealLandingPage() {
    const router = useHistory()
    const handleBack = () => {
        router.push('/')
    }
    return (
        <div>
            <MealPage />
        </div>
    )
}