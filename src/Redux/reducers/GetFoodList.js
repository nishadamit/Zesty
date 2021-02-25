import * as constants from "../constant";

const initialState = {
};

const selectFoodList = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_FOOD_LIST_REQUEST:
            return {
                ...state,
               ...action.payload
            };
        default:
            return {
                ...state,
            };
    }
};
export default selectFoodList;