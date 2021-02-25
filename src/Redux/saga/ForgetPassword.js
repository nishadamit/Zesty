import { forgetpassSuccess, forgetpassError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* ForgetPassword(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/forgotpassword`,
            action.payload,
        );
        if (response) {
            yield put(forgetpassSuccess({ response: response }));
        } else {
            yield put(forgetpassError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(forgetpassError({ error: "Invalid  details" }));

    }
}