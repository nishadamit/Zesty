import React from 'react';
import menu_vector from "../../assests/menu_vector.svg";

function MenuHeader({menu}) {

    return (
        <div className="menu-header mt-5">
            <p className="text-center menu-text">{menu}</p>
            <p className="text-center menu-path " >Home <span className="mx-2"><img src={menu_vector} alt="menu_vector" /></span>Menu</p>
        </div>
    )
}
export default MenuHeader;