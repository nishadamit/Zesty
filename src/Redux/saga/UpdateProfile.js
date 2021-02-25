import { updateProfileSuccess, updateProfileError} from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* UpdateProfile(action) {

    try {
        const response = yield call(
            axiosCall,
            "POST",
            `api/updateprofile`,
            action.payload,
        );
        if (response) {
            yield put(updateProfileSuccess({ response: response }));
        } else {
            yield put(updateProfileError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(updateProfileError({ error: "Invalid  details" }));

    }
}