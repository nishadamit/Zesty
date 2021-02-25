import { userDetailsSuccess, userDetailsError} from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* UserDetails(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/userdetails`,
            action.payload,
        );
        if (response) {
            yield put(userDetailsSuccess({ response: response }));
        } else {
            yield put(userDetailsError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(userDetailsError({ error: "Invalid  details" }));

    }
}