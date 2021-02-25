import React from 'react';
import { Switch, Route, Router } from "react-router";
import MenuList from './MenuList';
import MenuSidebar from './Sidebar';
import SaturdayMenu from './SaturdayMenu';


function MenuLayout() {
    return (
        <div className="d-flex justify-content-left">
            <MenuSidebar />
            <div className="menu-list">
                <p className="menu-list-item-heading">LET PERSONALISE YOUR MENU MORE, SELECT THE MEALS</p>
                <Switch>
                    <Route
                        path="/menu/saturday"
                        exact
                        render={(props) => {
                            return <SaturdayMenu {...props} />;
                        }}
                    />
                    <Route
                        path="/menu/sunday"
                        exact
                        render={(props) => {
                            return <SaturdayMenu {...props} />;
                        }}
                    />
                </Switch>
            </div>
        </div>
    )
}
export default MenuLayout;