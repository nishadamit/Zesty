import * as constants from "../constant";
// import { UserDetails } from "../saga/UserDetails";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
};

const UserDetails = (state = initialState, action) => {
    switch (action.type) {
        case constants.USER_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.USER_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload.response,
            };
        case constants.USER_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                ...action.payload.response,
            };
        default:
            return {
                ...state,
            };
    }
};
export default UserDetails;