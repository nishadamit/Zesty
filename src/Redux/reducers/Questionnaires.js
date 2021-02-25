import * as constants from "../constant";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    primaryCuisine: localStorage.getItem("primaryCuisine") ? JSON.parse(localStorage.getItem("primaryCuisine")) : [],
    secondaryCuisine: localStorage.getItem("secondaryCuisine") ? JSON.parse(localStorage.getItem("secondaryCuisine")) : [],
    foodType: localStorage.getItem("foodType") ? JSON.parse(localStorage.getItem("foodType")) : [],
    spicy: localStorage.getItem("spicy") ? JSON.parse(localStorage.getItem("spicy")) : [],
    allergens: localStorage.getItem("allergens") ? JSON.parse(localStorage.getItem("allergens")) : [],
    orderFor: localStorage.getItem("orderFor") ? (localStorage.getItem("orderFor")) : "",
    extraMention: localStorage.getItem("extraMention") ? (localStorage.getItem("extraMention")) : "",
    mealType: localStorage.getItem("mealType") ? JSON.parse(localStorage.getItem("mealType")) : [],
    day: localStorage.getItem("day") ? JSON.parse(localStorage.getItem("day")) : [],
    Breakfast_Time_Interval: localStorage.getItem("Breakfast_Time_Interval") ? (localStorage.getItem("Breakfast_Time_Interval")) : "",
    Dinner_Time_Interval: localStorage.getItem("Dinner_Time_Interval") ? (localStorage.getItem("Dinner_Time_Interval")) : "",
    Lunch_Time_Interval: localStorage.getItem("Lunch_Time_Interval") ? (localStorage.getItem("Lunch_Time_Interval")) : "",

};

const Questionnaires = (state = initialState, action) => {
    switch (action.type) {
        case constants.PRIMARY_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.UPDATE_QUESTIONNAIRE_DATA:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};
export default Questionnaires;