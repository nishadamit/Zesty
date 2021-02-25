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






function SelectedMenuList(props) {
    const [selectMenu, setSelectMenu] = useState([])
    const [dayListMenus, setDayListMenu] = useState({})
    const dispatch = useDispatch();
    const getFood = useSelector((state) => state.GetFood)
   
    return (
        <>
            <div className="menu-header" >
                <HomeNavbar menupage="menuPage" />
                <MenuHeader menu="Your Selected Menu"/>
            </div>
            <div className="menu-list-container">
                <div className="d-flex justify-content-left">
                    <MenuSidebar dayListMenus={dayListMenus} />
                    <div className="menu-list">
                        <Switch>
                            <Route
                                path="/selectedmenu/:day"
                                exact
                                render={(props) => {
                                    return <MenuLists dayListMenus={dayListMenus[props?.match?.params?.day]} />;
                                }}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            {/* <div className="menu-list-mabile-container">
                <Switch>
                    <Route
                        path="/menu/:days"
                        exact
                        render={(props) => {
                            return <MenuMobileLayout dayListMenus={dayListMenus[props?.match?.params?.days]} />;
                        }}
                    />
                </Switch>
            </div> */}
            <div className="footer" >
                <Footer />
            </div>
        </>
    )
}
export default withRouter(SelectedMenuList);