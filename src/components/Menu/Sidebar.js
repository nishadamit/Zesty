import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useHistory } from "react-router";
import { NavItem } from 'react-bootstrap';


function MenuSidebar({ dayListMenus }) {

    const router = useHistory()
    const handleRouting = (val) => {
        router.push(`/menu/${val}`)
    }

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <ul className="side-nav">
                    {Object.keys(dayListMenus).map(val => {
                        return (
                            <>
                                <NavItem activeClassName="active" onClick={() => handleRouting(val)} >
                                    <li className="my-2">
                                        <span style={{ color: "#E1BE57", cursor: "pointer"}}>{val}</span>
                                    </li>
                                </NavItem>
                            </>
                        )
                    }
                    )}


                </ul >
            </div >
        </div >
    )
}
export default MenuSidebar;