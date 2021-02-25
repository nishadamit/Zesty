import { updatePassSuccess, updatePassError } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* UpdatePassword(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/updatepassword`,
            action.payload,
        );
        if (response) {
            yield put(updatePassSuccess({ response: response }));
        } else {
            yield put(updatePassError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(updatePassError({ error: "Invalid  details" }));

    }
}