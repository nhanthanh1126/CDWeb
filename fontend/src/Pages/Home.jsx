import React from 'react';
import AboutCom from "../components/AboutCom";
import ContactCom from "../components/ContactCom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutCom/>

            <ContactCom/>
            <Footer/>
        </div>
    );
};

export default Home;