import * as constants from "../constant";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
};

const GetFood = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_FOOD_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.GET_FOOD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload.response,
            };
        case constants.GET_FOOD_ERROR:
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
export default GetFood;