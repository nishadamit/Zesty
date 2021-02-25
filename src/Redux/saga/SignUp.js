import { getSignUpSuccess, getSignUpError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* SignUp(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/createuser`,
            action.payload,
        );
        if (response) {
            localStorage.setItem("accessToken", JSON.stringify(response.data))
            yield put(getSignUpSuccess({ response: response }));
        } else {
            yield put(getSignUpError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(getSignUpError({ error: "Invalid  details" }));

    }
}