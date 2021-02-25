import { updateQuestionnaireData, secondaryRequest, dietaryRequest } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";
export function* addPrimaryCuisine(action) {
    localStorage.setItem("primaryCuisine", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ primaryCuisine: action.payload }))
}
export function* addSecondaryCuisine(action) {
    localStorage.setItem("secondaryCuisine", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ secondaryCuisine: action.payload }))
}
export function* addDietaryRequirment(action) {
    localStorage.setItem("foodType", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ foodType: action.payload }))
}
export function* addSpicyFood(action) {
    localStorage.setItem("spicy", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ spicy: action.payload }))
}
export function* addAllergiesFood(action) {
    localStorage.setItem("allergens", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ allergens: action.payload }))
}
export function* addOrderFor(action) {
    localStorage.setItem("orderFor", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ orderFor: action.payload }))
}
export function* addOrderType(action) {
    localStorage.setItem("mealType", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ mealType: action.payload }))
}
export function* addDeliveryDay(action) {
   
    localStorage.setItem("day", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ day: action.payload }))
}
export function* addExtraMention(action) {
    localStorage.setItem("extraMention", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ extraMention: action.payload }))
}
export function* addBreakfastTimeInterval(action) {
    localStorage.setItem("Breakfast_Time_Interval", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ Breakfast_Time_Interval: action.payload }))
}
export function* addDinnerTimeInterval(action) {
    localStorage.setItem("Dinner_Time_Interval", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ Dinner_Time_Interval: action.payload }))
}
export function* addLunchTimeInterval(action) {
    localStorage.setItem("Lunch_Time_Interval", JSON.stringify(action.payload))
    yield put(updateQuestionnaireData({ Lunch_Time_Interval: action.payload }))
}