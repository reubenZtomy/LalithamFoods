import React from "react";

const backgroundImageStyle1 = {
    backgroundImage: "url('assets/images/adv/pic2.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
};

const backgroundImageStyle2 = {
    backgroundImage: "url('assets/images/background/pic15.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
};

const backgroundImageStyle3 = {
    backgroundImage: "url('assets/images/background/pic16.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

class Offers extends React.Component {
    render() {
        return (
            <section className="content-inner overflow-hidden pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="adv-box style-1" style={backgroundImageStyle1}>
                                <div className="adv-content">
                                    <span className="special">FRIDAY SPECIAL</span>
                                    <h4 className="title">TASTY BURGER</h4>
                                </div>
                                <div className="adv-media">
                                    <img className="main-media" src="assets/images/adv/pic1.png" alt="/" />
                                    <div className="item-media offer-label">
                                        <img src="assets/images/adv/label.png" alt="/" />
                                        <span className="">50% OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="adv-box style-2">
                                        <div className="adv-media">
                                            <img src="assets/images/adv/pic3.png" alt="/" />
                                        </div>
                                        <div className="adv-content">
                                            <span className="special text-white">TODAY SPECIAL</span>
                                            <h4 className="title text-white">Nodels</h4>
                                            <span className="price">60% OFF</span>
                                            <a href="shop-cart.html" className="btn btn-white btn-hover-3"><span className="btn-text" data-text="Add To Cart">Add To Cart</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="adv-box style-3" style={backgroundImageStyle2}>
                                        <div className="adv-content">
                                            <span className="special text-white">MUSHROOM</span>
                                            <h4 className="title">BURGER</h4>
                                            <a href="shop-cart.html" className="btn btn-white btn-hover-3"><span className="btn-text" data-text="Add To Cart">Add To Cart</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="adv-box style-4" style={backgroundImageStyle3}>
                                        <div className="adv-media">
                                            <img src="assets/images/adv/pic4.png" alt="/" />
                                        </div>
                                        <div className="adv-content">
                                            <span className="special text-white">FOR LIMITED TIME ONLY</span>
                                            <h4 className="price">35% Offer</h4>
                                        </div>
                                        <a href="shop-cart.html" className="btn btn-white btn-hover-3"><span className="btn-text" data-text="Add To Cart">Add To Cart</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Offers