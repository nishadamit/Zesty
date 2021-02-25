import { getLoginSuccess, getLoginError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* Login(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/loginuser`,
            action.payload,
        );
        if (response) {
            localStorage.setItem("accessToken", JSON.stringify(response.data.token))
            localStorage.setItem("userid", JSON.stringify(response.data.id))
            yield put(getLoginSuccess({ response: response }));
        } else {
            yield put(getLoginError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(getLoginError({ error: "Invalid  details" }));

    }
}