import React from 'react';
import clock from '../../assests/clock.svg';
import clock_needle from '../../assests/clock_needle.svg';
import PickyDateTime from 'react-inputs-validation';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TimeRange from 'react-time-range';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';





import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 100,

    },
}));


function SelectTime({ handleCloseTime,  title,  handleBreakfastClick,  handleLunchClick, handleDinnerClick ,handleDietary}) {
    const classes = useStyles();

    const breakFastTimingHour = ["8:00 - 8:30 AM", "8:30 - 9:00 AM", "9:00 - 9:30 AM", "9:30 - 10:00 AM", "10:00 - 10:30 AM", "10:30 - 11:00 AM"]
    const lunchTimingHour = ["12:00 - 12:30 PM", "12:30 - 01:00 PM", "01:00 - 01:30 PM", "01:30 - 02:00 PM"]
    const dinnerTimingHour = ["09:00 - 09:30 PM", "09:30 - 10:00 PM", "10:00 - 10:30 PM", "10:30 - 11:00 PM"]

    return (
        <div className="select-time">
            <p className="select-time-text text-start pl-3 pt-4">Select a time between</p>
            <div className="d-flex justify-content-around set-time mx-3 my-4">

                {(title == "Breakfast") ?
                    <>
                        <select onChange={(e) => handleBreakfastClick(e)} >
                            {breakFastTimingHour.map(val => {
                                return (
                                    <option value={val} >{val}</option>
                                )
                            }
                            )}
                        </select>
                    </>
                    : (title == "Lunch") ?
                        <>
                            <select onChange={(e) => handleLunchClick(e)} >
                                {lunchTimingHour.map(val => {
                                    return (
                                        <option value={val} >{val}</option>
                                    )
                                }
                                )}
                            </select>
                        </>
                        :
                        <>
                            <select onChange={(e) => handleDinnerClick(e)} >
                                {dinnerTimingHour.map(val => {
                                    return (
                                        <option value={val} >{val}</option>
                                    )
                                }
                                )}
                            </select>
                        </>
                }
            </div>
            <div className="confirm-button my-4 d-flex justify-content-center">
                <button className=" " onClick={() =>handleDietary(title)}>Confirm</button>
            </div>
        </div>
    )
}
export default SelectTime;