import React from 'react';
import Header from '../components/header/Header';
import FollowUs from '../components/header/FollowUs';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Footer from '../components/Footer';

const Subscription = () => {
    return (
        <div>
            <Header />
            <FollowUs />
            <SubscriptionPlans />
            <Footer />
        </div>
    );
};

export default Subscription;

