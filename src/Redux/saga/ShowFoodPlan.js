import { showFoodPlanSuccess, showFoodPlanError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* ShowFoodPlan(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/showfoodplan`,
            action.payload,
        );
        if (response) {
            yield put(showFoodPlanSuccess({ response: response }));
        } else {
            yield put(showFoodPlanError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(showFoodPlanError({ error: "Invalid  details" }));

    }
}