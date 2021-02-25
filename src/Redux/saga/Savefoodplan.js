import { saveFoodPlanSuccess, saveFoodPlanError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* SaveFoodPlan(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/savefoodplan`,
            action.payload,
        );
        if (response) {
            yield put(saveFoodPlanSuccess({ response: response }));
        } else {
            yield put(saveFoodPlanError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(saveFoodPlanError({ error: "Invalid  details" }));

    }
}