import React, { useEffect, useState } from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import UserDetails from '../components/Profile/ProfileDetails';
import ProfileSubscription from '../components/Profile/ProfileSubscriptions';
import Footer from '../components/Layout/Footer';
import UpdateProfile from '../components/Update Profile';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { showFoodPlanRequest, userDetailsRequest, updateProfileReset } from '../Redux/action/index';

function ProfilePage() {
    const [showUpdate, setShowUpdate] = useState(false)
    const [useDetails, setUseDetails] = useState({})
    const router = useHistory();
    const dispatch = useDispatch();
    const showFoodPlanStatus = useSelector((state) => state.ShowFoodPlan)
    const userDetailsStatus = useSelector((state) => state.UserDetails)
    const updateProfileStatus = useSelector((state) => state.UpdateProfile)
    useEffect(() => {
        dispatch(showFoodPlanRequest({
            "userId": JSON.parse(localStorage.getItem("userid")),
        }))
        dispatch(userDetailsRequest({
            "userId": JSON.parse(localStorage.getItem("userid")),
        }))
        dispatch(updateProfileReset())
    }, [])

    const handleUpdateProfile = () => {
        router.push('/editProfile')
    }

    useEffect(() => {
        if (userDetailsStatus?.data) {
            setUseDetails(userDetailsStatus?.data)
        }
    }, [userDetailsStatus])
    const handleModalClose = () => {
        setShowUpdate(false)

    }
    useEffect(() => {
        if (updateProfileStatus?.data?.error === 0) {
            dispatch(userDetailsRequest({
                "userId": JSON.parse(localStorage.getItem("userid")),
            }))
        }
    }, [showUpdate])

    
    return (
        <div>
            <ProfileHeader />
            <div className="user-details">
                <UserDetails userDetailsStatus={userDetailsStatus} handleUpdateProfile={handleUpdateProfile} />
                <ProfileSubscription ShowFoodPlanStaus={showFoodPlanStatus} />
            </div>
            <div className="space"></div>
            <div className="footer" >
                <Footer />
            </div>
        </div>
    )
}
export default ProfilePage;