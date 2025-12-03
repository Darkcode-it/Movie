import React from 'react';
import Header from '../components/header/Header';
import ShearcheBox from '../components/header/ShearcheBox';
import FollowUs from '../components/header/FollowUs';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Footer from '../components/Footer';

const Subscription = () => {
    return (
        <div>
            <Header />
            <ShearcheBox />
            <FollowUs />
            <SubscriptionPlans />
            <Footer />
        </div>
    );
};

export default Subscription;

