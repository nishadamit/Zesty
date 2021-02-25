import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import * as constants from '../constant';
import { GetFood } from './GetFood';
import { SignUp } from './SignUp';
import { Login } from './login';
import { SocialLogin } from './SocialLogin';
import { ForgetPassword } from './ForgetPassword';
import { UpdatePassword } from './updatePass';
import { SaveFoodPlan } from './Savefoodplan';
import { ShowFoodPlan } from './ShowFoodPlan';
import { UpdateProfile } from './UpdateProfile';
import { UserDetails } from './UserDetails';
import {AllergiesList} from './Allergies';
import {
    addPrimaryCuisine, addSecondaryCuisine, addAllergiesFood,
    addDeliveryDay, addDietaryRequirment, addExtraMention,
    addOrderFor, addOrderType, addSpicyFood,addBreakfastTimeInterval,addDinnerTimeInterval,addLunchTimeInterval
} from './Questionnaires';
import { allergiesListRequest } from '../action';
function* watchActions() {
    yield takeLatest(constants.GET_FOOD_REQUEST, GetFood)
    yield takeLatest(constants.SIGN_UP_REQUEST, SignUp)
    yield takeLatest(constants.LOGIN_REQUEST, Login)
    yield takeLatest(constants.SOCIAL_REQUEST, SocialLogin)
    yield takeLatest(constants.FORGET_PASSWORD_REQUEST, ForgetPassword)
    yield takeLatest(constants.UPDATE_PASSWORD_REQUEST, UpdatePassword)
    yield takeLatest(constants.SAVE_FOOD_PLAN_REQUEST, SaveFoodPlan)
    yield takeLatest(constants.SHOW_FOOD_PLAN_REQUEST, ShowFoodPlan)
    yield takeLatest(constants.UPDATE_PROFILE_REQUEST, UpdateProfile)
    yield takeLatest(constants.USER_DETAILS_REQUEST, UserDetails)
    yield takeLatest(constants.ADD_PRIMARY_REQUEST, addPrimaryCuisine)
    yield takeLatest(constants.ADD_SECONDARY_REQUEST, addSecondaryCuisine)
    yield takeLatest(constants.ADD_ALLERGIES_REQUEST, addAllergiesFood)
    yield takeLatest(constants.ADD_DELIVERY_REQUEST, addDeliveryDay)
    yield takeLatest(constants.ADD_DIETARY_REQUEST, addDietaryRequirment)
    yield takeLatest(constants.ADD_EXTRAMENTION_REQUEST, addExtraMention)
    yield takeLatest(constants.ADD_SPICY_FOOD_REQUEST, addSpicyFood)
    yield takeLatest(constants.ADD_ORDER_FOR_REQUEST, addOrderFor)
    yield takeLatest(constants.ADD_ORDER_TYPE_REQUEST, addOrderType)
    yield takeLatest(constants.ADD_BREAKFAST_TIME_INTERVAL_REQUEST, addBreakfastTimeInterval)
    yield takeLatest(constants.ADD_DINNER_TIME_INTERVAL_REQUEST, addDinnerTimeInterval)
    yield takeLatest(constants.ADD_LUNCH_TIME_INTERVAL_REQUEST, addLunchTimeInterval)
    yield takeLatest(constants.ALLERGIESLIST_REQUEST, AllergiesList)
}
export default function* rootSaga() {
    yield all([watchActions()])
}