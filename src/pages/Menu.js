import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/Layout/Navbar';
import MenuHeader from '../components/Menu/MenuHeader';
import Footer from '../components/Layout/Footer';
import '../styles/menu.scss';
import MenuSidebar from '../components/Menu/Sidebar';
import { Switch, Route, Router, Redirect } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getFoodRequest } from '../Redux/action/index';
import { withRouter } from "react-router-dom";
import MenuLists from '../components/Menu/MenuList';
import MenuMobileLayout from "../components/Menu/MenuMobileLayout";



function MenuList(props) {
    const [selectMenu, setSelectMenu] = useState([])
    const [dayListMenus, setDayListMenu] = useState({})
    const dispatch = useDispatch();
    const getFood = useSelector((state) => state.GetFood)
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    useEffect(() => {
        if (props.location.pathname === "/menu") {
            return <Redirect to="/menu/saturday" />;
        }

       
        dispatch(getFoodRequest({
            "primaryCuisine": QuestionnairesStatus.primaryCuisine,
            "secondaryCuisine": QuestionnairesStatus.secondaryCuisine,
            "foodType": QuestionnairesStatus.foodType,
            "allergens": QuestionnairesStatus.allergens,
            "spicy": QuestionnairesStatus.spicy,
            "mealType": QuestionnairesStatus.mealType,
            "day": QuestionnairesStatus.day,
        }))

    }, [])

    useEffect(() => {
        const dayListMenu = getFood.data;
        setDayListMenu(dayListMenu)
       
    }, [getFood.isSuccess])
    console.log(dayListMenus,"newDayListMenus");


    return (
        <>
            <div className="menu-header" >
                <HomeNavbar menupage="menuPage" />
                <MenuHeader menu="Your Menu" />
            </div>
            <div className="menu-list-container">
                <div className="d-flex justify-content-left">
                    <MenuSidebar dayListMenus={dayListMenus} />
                    <div className="menu-list">
                        <p className="menu-list-item-heading">LET PERSONALISE YOUR MENU MORE, SELECT THE MEALS</p>
                        <Switch>
                            <Route
                                path="/menu/:day"
                                exact
                                render={(props) => {
                                    return <MenuLists dayListMenus={dayListMenus[props?.match?.params?.day]} />;
                                }}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className="menu-list-mabile-container">
                <Switch>
                    <Route
                        path="/menu/:days"
                        exact
                        render={(props) => {
                            return <MenuMobileLayout dayLists={dayListMenus} dayListMenus={dayListMenus[props?.match?.params?.days]} />;
                        }}
                    />
                </Switch>
            </div>
            <div className="footer" >
                <Footer />
            </div>
        </>
    )
}
export default withRouter(MenuList);