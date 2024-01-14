import React from 'react'
import LoadingScreen from '../LoadingLogo/LoadingScreen'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import FeaturedSection from '../Sections/FeaturedSection';
import Offers from '../Sections/Offers'
import OffcanvasForm from '../Sections/OffcanvasForm';
import LandingPage from '../Sections/LandingPage';
import WhyChooseUs from '../Sections/WhyChooseUs';
import ItemMenu from '../Sections/ItemMenu';
import ScrollToTop from '../Sections/ScrollToTop';


const backgroundImageStyle5 = {
    backgroundImage: "url('assets/images/background/pic13.png')",
    backgroundAttachment: "fixed"
};

const Home = ({ products }) => {
    
    return (
        <>
            <Header productsData={products}/>
            <OffcanvasForm />
            <div className="page-content bg-white">
                <LandingPage />
                <FeaturedSection />
                <WhyChooseUs />
                <ItemMenu productsList={products} />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Home;