import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getFoodRequest = createAction(constant.GET_FOOD_REQUEST);
export const getFoodSuccess = createAction(constant.GET_FOOD_SUCCESS);
export const getFoodError = createAction(constant.GET_FOOD_ERROR);

export const getSignUpRequest = createAction(constant.SIGN_UP_REQUEST);
export const getSignUpSuccess = createAction(constant.SIGN_UP_SUCCESS);
export const getSignUpError = createAction(constant.SIGN_UP_ERROR);

export const getLoginRequest = createAction(constant.LOGIN_REQUEST);
export const getLoginSuccess = createAction(constant.LOGIN_SUCCESS);
export const getLoginError = createAction(constant.LOGIN_ERROR);

export const getSocialRequest = createAction(constant.SOCIAL_REQUEST);
export const getSocialSuccess = createAction(constant.SOCIAL_SUCCESS);
export const getSocialError = createAction(constant.SOCIAL_ERROR);

export const getCartRequest = createAction(constant.CART_REQUEST);
export const getCartSuccess = createAction(constant.CART_SUCCESS);
export const getCartError = createAction(constant.CART_ERROR);

export const forgetpassRequest = createAction(constant.FORGET_PASSWORD_REQUEST);
export const forgetpassSuccess = createAction(constant.FORGET_PASSWORD_SUCCESS);
export const forgetpassError = createAction(constant.FORGET_PASSWORD_ERROR);

export const updatePassRequest = createAction(constant.UPDATE_PASSWORD_REQUEST);
export const updatePassSuccess = createAction(constant.UPDATE_PASSWORD_SUCCESS);
export const updatePassError = createAction(constant.UPDATE_PASSWORD_ERROR);

export const saveFoodPlanRequest = createAction(constant.SAVE_FOOD_PLAN_REQUEST);
export const saveFoodPlanSuccess = createAction(constant.SAVE_FOOD_PLAN_SUCCESS);
export const saveFoodPlanError = createAction(constant.SAVE_FOOD_PLAN_ERROR);

export const selectFoodListRequest = createAction(constant.SELECT_FOOD_LIST_REQUEST);

export const showFoodPlanRequest = createAction(constant.SHOW_FOOD_PLAN_REQUEST);
export const showFoodPlanSuccess = createAction(constant.SHOW_FOOD_PLAN_SUCCESS);
export const showFoodPlanError = createAction(constant.SHOW_FOOD_PLAN_ERROR);

export const updateProfileRequest = createAction(constant.UPDATE_PROFILE_REQUEST);
export const updateProfileSuccess = createAction(constant.UPDATE_PROFILE_SUCCESS);
export const updateProfileError = createAction(constant.UPDATE_PROFILE_ERROR);
export const updateProfileReset = createAction(constant.UPDATE_PROFILE_RESET);

export const userDetailsRequest = createAction(constant.USER_DETAILS_REQUEST);
export const userDetailsSuccess = createAction(constant.USER_DETAILS_SUCCESS);
export const userDetailsError = createAction(constant.USER_DETAILS_ERROR);

export const primaryRequest = createAction(constant.PRIMARY_REQUEST);
export const secondaryRequest = createAction(constant.SECONDARY_REQUEST);
export const dietaryRequest = createAction(constant.DIETARY_REQUEST);
export const spicyfoodRequest = createAction(constant.SPICY_FOOD_REQUEST);
export const orderforRequest = createAction(constant.ORDER_FOR_REQUEST);
export const ordertypeRequest = createAction(constant.ORDER_TYPE_REQUEST);
export const deliveryRequest = createAction(constant.DELIVERY_REQUEST);
export const extramentionRequest = createAction(constant.EXTRAMENTION_REQUEST);

export const updatePrimaryRequest = createAction(constant.UPDATE_PRIMARY_REQUEST);
export const updateSecondaryRequest = createAction(constant.UPDATE_SECONDARY_REQUEST);
export const updateDietaryRequest = createAction(constant.UPDATE_DIETARY_REQUEST);
export const updateSpicyfoodRequest = createAction(constant.UPDATE_SPICY_FOOD_REQUEST);
export const updateOrderforRequest = createAction(constant.UPDATE_ORDER_FOR_REQUEST);
export const updateOrdertypeRequest = createAction(constant.UPDATE_ORDER_TYPE_REQUEST);
export const updateDeliveryRequest = createAction(constant.UPDATE_DELIVERY_REQUEST);
export const updateExtramentionRequest = createAction(constant.UPDATE_EXTRAMENTION_REQUEST);


export const addPrimaryRequest = createAction(constant.ADD_PRIMARY_REQUEST);
export const addSecondaryRequest = createAction(constant.ADD_SECONDARY_REQUEST);
export const addDietaryRequest = createAction(constant.ADD_DIETARY_REQUEST);
export const addSpicyfoodRequest = createAction(constant.ADD_SPICY_FOOD_REQUEST);
export const addAllergiesRequest = createAction(constant.ADD_ALLERGIES_REQUEST);
export const addOrderforRequest = createAction(constant.ADD_ORDER_FOR_REQUEST);
export const addOrdertypeRequest = createAction(constant.ADD_ORDER_TYPE_REQUEST);
export const addDeliveryRequest = createAction(constant.ADD_DELIVERY_REQUEST);
export const addExtramentionRequest = createAction(constant.ADD_EXTRAMENTION_REQUEST);
export const addBreakFastTimeIntervalRequest = createAction(constant.ADD_BREAKFAST_TIME_INTERVAL_REQUEST);
export const addDinnerTimeIntervalRequest = createAction(constant.ADD_DINNER_TIME_INTERVAL_REQUEST);
export const addLunchTimeIntervalRequest = createAction(constant.ADD_LUNCH_TIME_INTERVAL_REQUEST);
export const updateQuestionnaireData = createAction(constant.UPDATE_QUESTIONNAIRE_DATA);

export const allergiesListRequest = createAction(constant.ALLERGIESLIST_REQUEST);
export const allergiesListSuccess = createAction(constant.ALLERGIESLIST_SUCCESS);
export const allergiesListError = createAction(constant.ALLERGIESLIST_ERROR);