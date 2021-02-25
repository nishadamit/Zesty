import * as constants from "../constant";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
};

const SignUp = (state = initialState, action) => {
    switch (action.type) {
        case constants.SIGN_UP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload.response,
            };
        case constants.SIGN_UP_ERROR:
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
export default SignUp;