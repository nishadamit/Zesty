import React from 'react';
import user_img from '../../assests/user_img.svg';
import twitter from '../../assests/twitter.svg';
import facebook from '../../assests/facebook.svg';
import instagram from '../../assests/instagram.svg';
import { useState } from 'react';
import UpdateProfile from '../Update Profile';
import { useEffect } from 'react';
import {useHistory} from "react-router";

function UserDetails({userDetailsStatus,handleUpdateProfile}) {
    const router = useHistory();
    
     return (
        <div className="about-user">
            <div className="d-flex pl-5 py-5 my-5 flex-wrap">
                <img src={userDetailsStatus?.data?.image} alt={user_img} />
                <div className="user-profile-details d-flex flex-column justify-content-center mx-4">
                <p className="user-name">{userDetailsStatus?.data?.name?.first} {userDetailsStatus?.data?.name?.last}</p>
                    <div className="social-media d-flex justify-content-between">
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                    </div>
                    <button type="submit" className="edit-profile mt-3" onClick={handleUpdateProfile}>Edit Profile</button>
                </div>
               
            </div>
        </div>
    )
}
export default UserDetails;