import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import UserDetails from '../components/Profile/ProfileDetails';
import ProfileSubscription from '../components/Profile/ProfileSubscriptions';
import Footer from '../components/Layout/Footer';
import { useSelector } from 'react-redux';
import SubscriptionBox from '../components/Profile/SubscriptionBox';

function SubscriptionSelection() {
    return (
        <div>
            <ProfileHeader />
            <div className="user-details">
                <UserDetails />
                <ProfileSubscription />
            </div>
            <div className="space"></div>
            <div className="footer" >
                <Footer />
            </div>
        </div>
    )
}
export default SubscriptionSelection;