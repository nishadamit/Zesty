import { combineReducers } from "redux";
import GetFood from './GetFood';
import SignUp from './SignUp';
import Login from './Login';
import SocialLogin from './SocialLogin';
import Cart from './Cart';
import ForgetPassword from './ForgetPassword';
import UpdatePassword from './UpdatePass';
import SaveFoodPlan from './SaveFoodPlan';
import selectFoodList from './GetFoodList';
import ShowFoodPlan from './ShowFoodPlan';
import UpdateProfile from "./UpdateProfile";
import UserDetails from './UserDetails';
import Questionnaires from './Questionnaires';
import AllergiesList from './AllergiesList';

export default combineReducers({
  GetFood: GetFood,
  SignUp : SignUp,
  Login : Login,
  SocialLogin : SocialLogin,
  Cart : Cart,
  ForgetPassword : ForgetPassword,
  UpdatePassword : UpdatePassword,
  SaveFoodPlan : SaveFoodPlan,
  selectFoodList : selectFoodList,
  ShowFoodPlan : ShowFoodPlan,
  UpdateProfile : UpdateProfile,
  UserDetails : UserDetails,
  Questionnaires : Questionnaires,
  AllergiesList : AllergiesList
})