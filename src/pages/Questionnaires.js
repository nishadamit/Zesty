import React, { useState } from 'react';
import SelectPrimary from './SelectPrimary';
import BackNext from '../components/SelectPrimary/BackNext';
import SelectSecondary from './SelectSecondary';
import Diet from "./DietaryRequirement";
import OrderFor from "./OrderFor";
import QuestionV36 from "./QuestionV36";
import Spicy from "./Spicy";
import QuestionV38 from "./QuestionV38";
import QuestionV26 from "./QuestionV26";
import DeliveryDay from "./DeliveryDay";
import BackClose from '../components/SelectPrimary/BackClose';
import { useHistory } from 'react-router';
import HorizontalLinearStepper from '../components/stepper';
import Stepper from 'react-stepper-horizontal';
import { useSelector } from 'react-redux';



function Questionnaires({ handleBackStep, handleNext, activeStep, steps }) {
    const [state, setState] = useState({
        tab: 0,
        primary: false,
        secondary: false,
        diet: false,
        spicy: false,
        order: false,
        mealtime: false,
        deliveryDay: false,
        allergies : false
    })
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    // console.log(QuestionnairesStatus, "QuestionnairesStatusQuestionnairesStatus");
    const router = useHistory();
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <SelectPrimary primary={state.primary} handleAlert={handleAlertPrimary} />;
            case 1:
                return <SelectSecondary />;
            case 2:
                return <Diet diet={state.diet} handleAlert={handleAlertDietary} />;
            case 3:
                return <Spicy spicyTypes={state.spicy} handleAlert={handleAlertSpicy} />;
            case 4:
                return <QuestionV36 allergies={state.allergies}/>;
            case 5:
                return <OrderFor orderFors={state.order} handleAlert={handleAlertOrder} />;
            case 6:
                return <QuestionV38 />;
            case 7:
                return <QuestionV26 mealtimes={state.mealtime} handleAlert={handleAlertMealTime} />;
            case 8:
                return <DeliveryDay deliveryDays={state.deliveryDay} handleAlert={handleAlertDeliveryDay} />;

            default:
                return <SelectPrimary />;
        }
    };
    const handleAlertPrimary = () => {
        setState({ ...state, primary: false })
    }
    const handleAlertSpicy = () => {
        setState({ ...state, spicy: false })
    }
    const handleAlertDietary = () => {
        setState({ ...state, diet: false })
    }
    const handleAlertOrder = () => {
        setState({ ...state, order: false })
    }
    const handleAlertDeliveryDay = () => {
        setState({ ...state, deliveryDay: false })
    }
    const handleAlertMealTime = () => {
        setState({ ...state, mealtime: false })
    }
    const handleBackPage = () => {
        if (state.tab == 0) {

            router.push('/meallanding')
        } else if(state.tab == 2 && QuestionnairesStatus?.primaryCuisine?.length == 4){
            setState({ ...state, tab: state.tab - 2 })
        } else {
            setState({ ...state, tab: state.tab - 1 })
        }
    }
    const handleStartPage = () => {

        if (state.tab == 0) {
            if (QuestionnairesStatus?.primaryCuisine?.length == 0) {
              
                setState({ ...state, primary: true })
            } else if(QuestionnairesStatus?.primaryCuisine?.length == 4) {
               
                setState({ ...state, tab: state.tab + 2 })
            }else{
                console.log(QuestionnairesStatus?.primaryCuisine?.length);
                setState({ ...state, tab: state.tab + 1 })
            }
        }
        if (state.tab == 1) {
            setState({ ...state, tab: state.tab + 1 })
        }

        if (state.tab == 2) {
            if (QuestionnairesStatus?.foodType?.length == 0) {
                setState({ ...state, diet: true })
            } else {

                setState({ ...state, tab: state.tab + 1 })
            }
        }
        if (state.tab == 4) {
            setState({ ...state, tab: state.tab + 1 })
        }
        if (state.tab == 3) {
            if (QuestionnairesStatus?.spicy?.length == 0) {
                setState({ ...state, spicy: true })
            } else {

                setState({ ...state, tab: state.tab + 1 })
            }
        }
        if (state.tab == 4) {
            if (QuestionnairesStatus?.allergies?.length == 0) {
                setState({ ...state, allergies: true })
            } else {

                setState({ ...state, tab: state.tab + 1 })
            }
        }
        if (state.tab == 5) {
            if (QuestionnairesStatus?.orderFor?.length == 0) {
                setState({ ...state, order: true })
            } else {

                setState({ ...state, tab: state.tab + 1 })
            }
        }
        if (state.tab == 6) {
            setState({ ...state, tab: state.tab + 1 })
        }

        if (state.tab == 7) {
            if (QuestionnairesStatus?.mealType?.length == 0) {
                setState({ ...state, mealtime: true })
            } else {

                setState({ ...state, tab: state.tab + 1 })
            }
        }
        if (state.tab == 8) {

            if (QuestionnairesStatus?.day?.length == 0) {
                setState({ ...state, deliveryDay: true })
            } else {
                router.push(`/menu/${QuestionnairesStatus.day[1]}`)
            }
        }

    }
    const handleBack = () => {
        router.push('/')
    }

    return (
        <div>
            <BackClose handleBack={handleBack} />
            <div>{getStepContent(state.tab)}</div>
            <BackNext buttonType={(state.tab == 4 ) && (QuestionnairesStatus?.allergens?.length == 0)? "Skip" : "Next"} handleStartPage={handleStartPage} handleBackPage={handleBackPage} />
            <Stepper steps={[{}, {}, {}, {}, {}, {}, {}, {}, {},]} size={20} completeOpacity={1} circleFontSize={0} activeStep={state.tab} defaultBarColor="#828282" completeBarColor="#E6BE3E" activeColor="#E6BE3E" completeColor="#E6BE3E" />
        </div>
    )
}
export default Questionnaires;