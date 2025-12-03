import React from 'react';
import Header from '../components/header/Header';
import FollowUs from '../components/header/FollowUs';
import CreateKidProfile from '../components/CreateKidProfile';
import Footer from '../components/Footer';

const CreateKidProfilePage = () => {
    return (
        <div>
            <Header />
         
            <CreateKidProfile />
            <Footer />
        </div>
    );
};

export default CreateKidProfilePage;

