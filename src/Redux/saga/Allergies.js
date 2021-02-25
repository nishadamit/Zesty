import { allergiesListError, allergiesListSuccess } from '../action/index';
import axiosCall from "../../Services/index";
import { call, put } from "redux-saga/effects";


export function* AllergiesList(action) {

    try {
        const response = yield call(
            axiosCall,
            "GET",
            `api/listallergens`,
            action.payload,
        );
        console.log(response,"response");
        if (response) {
            
            yield put(allergiesListSuccess({ response: response }));
        } else {
            yield put(allergiesListError({ error: "Invalid  details" }));
        }
    } catch (error) {
        yield put(allergiesListError({ error: "Invalid  details" }));

    }
}