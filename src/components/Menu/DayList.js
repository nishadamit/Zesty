import React from 'react';
import { NavLink } from "react-router-dom";



function DayList({ dayLists }) {

    return (
        <div className="day-list">
            <div className="d-flex flex-column">
                {Object.keys(dayLists).map(val => {
                    return (
                        <NavLink activeClassName="active" to={`/menu/${val}`}>
                            <p>{val}</p>
                        </NavLink>
                    )
                })
                }
            </div>
        </div>
    )
}
export default DayList;