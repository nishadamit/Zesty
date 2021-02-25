import { getFoodSuccess, getFoodError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* Cart(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/savecart`,
            action.payload,
        );
        if (response) {
            yield put(getFoodSuccess({ response: response }));
        } else {
            yield put(getFoodError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(getFoodError({ error: "Invalid  details" }));

    }
}