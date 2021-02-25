import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MenuList from './pages/Menu';
import MenuLayout from './components/Menu/MenuLayout';
import DietaryRequirement from './pages/DietaryRequirement';
import QuestionV26 from './pages/QuestionV26';
import QuestionV36 from './pages/QuestionV36';
import QuestionV38 from './pages/QuestionV38';
import SelectOrder from './pages/selectOrder'
import SelectSecondary from './pages/SelectSecondary';
import SelectPrimary from './pages/SelectPrimary'; 
import MealLandingPage from './pages/MealLandingPage';
import SignUpPage from './pages/SignUpPage';
import Spicy from './pages/Spicy';
import OrderFor from './pages/OrderFor';
import DeliveryDay from './pages/DeliveryDay';
import Cart from './pages/Cart';
import ProfilePage from './pages/ProfilePage';
import Checkout from "./pages/Checkout";
import ForgetPassword from './pages/ForgetPassword';
import ForgetLanding from './pages/ForgetLanding';
import SelectedMenuList from './pages/SelectedMenuList';
import UpdateProfile from './components/Update Profile';
import Questionnaires from './pages/Questionnaires';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/menu/login" component={LoginPage} />
        <Route exact path="/Signup" component={SignUpPage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/menu/:id" component={MenuList} />
        <Route exact path="/meallanding" component={MealLandingPage} />
        <Route exact path="/diet" component={DietaryRequirement} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/spicy" component={Spicy} />
        <Route exact path="/orderfor" component={OrderFor} />
        <Route exact path="/deliveryday" component={DeliveryDay} />
        <Route exact path="/selectOrder" component={SelectOrder} />
        <Route exact path="/selectsecondary" component={SelectSecondary} />
        <Route excat path='/selectprimary' component={SelectPrimary} />
        <Route exact path="/allergies" component={QuestionV36} />
        <Route exact path="/extramention" component={QuestionV38} />
        <Route exact path="/breakefast" component={QuestionV26} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/forgetPassword" component={ForgetPassword} />
        <Route exact path="/updatepassword/:id" component={ForgetLanding} />
        <Route exact path="/selectedMenu/:id" component={SelectedMenuList} />
        <Route exact path="/editProfile" component={UpdateProfile} />
        <Route exact path="/questionnaires" component={Questionnaires} />
      </Switch>
    </Router>
  );
}

export default App;
