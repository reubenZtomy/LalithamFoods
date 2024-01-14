import React from "react";
import fishImage from "../../assets/images/Icons/fish.png";
import turkeyImage from "../../assets/images/Icons/turkey.png";
import VegImage from "../../assets/images/Icons/leaf.png";
import ChipsImage from "../../assets/images/Icons/chips.png";
import AllImage from "../../assets/images/Icons/AllItems.png";
import DrinksImage from "../../assets/images/Icons/soda.png";
import SweetsImage from "../../assets/images/Icons/sweet.png";
import ComboImage from "../../assets/images/Icons/combo.png"

class LandingPage extends React.Component {
    render() {
        return (
            <div className="main-bnr-two">
                <div className="main-slider-2">
                    <div className="banner-inner">
                        <div className="primary-box"></div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7 col-md-7">
                                    <div className="banner-content">
                                        <h1 className="title wow fadeInUp" data-wow-delay="0.2s">The Number <span className="text-primary">#1</span> Choice Your Hunger Solution</h1>
                                        <p className="wow fadeInUp" data-wow-delay="0.4s">Lalitham Food Products: Authentic homemade taste, crafted to order with natural ingredients and no preservatives. Share your best description to win 500 grams free! Find us on Amazon.co.in, and contact us at lalithamfoods@gmail.com.</p>

                                        <div className="banner-btn d-flex align-items-center wow fadeInUp" data-wow-delay="0.6s">
                                            <a href="/Menu" className="btn btn-primary btn-md shadow-primary m-r30 btn-hover-3"><span className="btn-text" data-text="Menu">Menu</span></a>
                                            <a href="/Cart" className="btn btn-outline-primary btn-md shadow-primary btn-hover-3"><span className="btn-text" data-text="View Cart">View Cart</span></a>
                                        </div>
                                    </div>
                                    <div className="main-thumb2-area">
                                        <a href="our-menu-1.html" className="food-card wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="icon">
                                                <img src={DrinksImage} className="shakeimage" />
                                            </div>
                                        </a>
                                        <a href="our-menu-1.html" className="food-card wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="icon">
                                            <img src={SweetsImage} className="shakeimage" />
                                            </div>
                                        </a>
                                        <a href="our-menu-1.html" className="food-card wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="icon">
                                            <img src={DrinksImage} className="shakeimage" />
                                            </div>
                                        </a>
                                        <a href="our-menu-1.html" className="food-card wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="icon">
                                            <img src={ChipsImage} className="shakeimage" />
                                            </div>
                                        </a>
                                        <a href="our-menu-1.html" className="food-card wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="icon">
                                            <img src={turkeyImage} className="shakeimage" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5">
                                    <div className="banner-media">
                                        <img src="assets/images/main-slider/slider3/bg.png" className="item-bg" alt="/" />
                                        <div className="item-media wow fadeInRight dz-move-down" data-wow-delay="1s" data-speed-x="-2" data-speed-scale="-1">
                                            <img src="assets/images/main-slider/slider3/offer.png" className="offer dz-move" alt="/" hidden/>
                                            <img src="assets/images/main-slider/slider3/crown.png" className="crown" alt="/" hidden />
                                            <img src="assets/images/main-slider/slider3/burger.png" className="img2" alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="primary-box style-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage