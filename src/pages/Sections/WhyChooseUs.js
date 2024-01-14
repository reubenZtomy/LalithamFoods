import React from "react";

const backgroundImageStyle4 = {
    backgroundImage: "url('assets/images/background/pic10.png')",
    backgroundAttachment: "fixed"
};

class WhyChooseUs extends React.Component {
    render() {
        return (
            <section className="section-wrapper-4 content-inner overflow-hidden bg-parallax" style={backgroundImageStyle4}>
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="title wow flipInX" data-wow-delay="0.2s">Why Choose Us ?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-bx-wraper style-4">
                                <div className="icon-bx">
                                    <div className="icon-cell">
                                        <i className="flaticon-fast-delivery"></i>
                                    </div>
                                </div>
                                <div className="icon-content">
                                    <p>24/7 Free Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-bx-wraper style-4">
                                <div className="icon-bx">
                                    <div className="icon-cell">
                                        <i className="flaticon-clock-1"></i>
                                    </div>
                                </div>
                                <div className="icon-content">
                                    <p>We are Open Around the Clock</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="icon-bx-wraper style-4">
                                <div className="icon-bx">
                                    <div className="icon-cell">
                                        <i className="flaticon-chef"></i>
                                    </div>
                                </div>
                                <div className="icon-content">
                                    <p>Best Chef</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="icon-bx-wraper style-4">
                                <div className="icon-bx">
                                    <div className="icon-cell">
                                        <i className="flaticon-cuisine"></i>
                                    </div>
                                </div>
                                <div className="icon-content">
                                    <p>We Have The Freshest Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs