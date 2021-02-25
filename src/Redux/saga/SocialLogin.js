import { getSocialSuccess, getSocialError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* SocialLogin(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/sociallogin`,
            action.payload,
        );
        if (response) {
            localStorage.setItem("userid", JSON.stringify(response.data.id))
            localStorage.setItem("accessToken", response.data.token)
            yield put(getSocialSuccess({ response: response }));
        } else {
            yield put(getSocialError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(getSocialError({ error: "Invalid  details" }));

    }
}