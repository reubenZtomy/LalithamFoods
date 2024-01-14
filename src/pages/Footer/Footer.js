import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer className="site-footer style-3" id="footer">
                        <div className="footer-bg-wrapper">
                            <div className="container">
                                <div className="footer-top">
                                    <div className="footer-subscribe-wrapper">
                                        <div className="wrapper-inner">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-4 col-lg-4 mb-lg-0 m-b20 wow fadeInUp" data-wow-delay="0.2s">
                                                    <div className="footer-logo">
                                                        <a href="index.html" className="anim-logo">
                                                            <img src="assets/images/logo.png" alt="swigo logo" />
                                                        </a>
                                                    </div>
                                                    <p className="mb-0 font-14">Lalitham Food Products: Elevating Homemade Excellence. Crafted to order with natural, preservative-free ingredients. Your health, our priority in every bite!</p>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                                                    <h5 className="title m-b15">Subscribe for the latest product updates!</h5>
                                                    <form className="dzSubscribe" action="assets/script/mailchamp.php" method="post">
                                                        <div className="dzSubscribeMsg text-white"></div>
                                                        <div className="input-group">
                                                            <input name="dzEmail" required="required" type="text" className="form-control border-0" placeholder="Enter Your Email" />
                                                            <div className="input-group-addon">
                                                                <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-2">
                                                                    <span>Subscribe</span><i className="fa-solid fa-paper-plane"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-6 text-md-start">
                                            <h5 className="footer-title wow fadeInUp" data-wow-delay="0.2s">OUR LINKS</h5>
                                            <div className="footer-menu wow fadeInUp" data-wow-delay="0.4s">
                                                <ul>
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="blog-standard.html">Blog</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-6 text-md-end">
                                            <h5 className="footer-title wow fadeInUp" data-wow-delay="0.2s">Help Center</h5>
                                            <div className="footer-menu wow fadeInUp" data-wow-delay="0.4s">
                                                <ul>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="shop-style-1.html">Shop</a></li>
                                                    <li><a href="shop-style-2.html">Category Filter</a></li>
                                                    <li><a href="testimonial.html">Testimonials</a></li>
                                                    <li><a href="contact-us.html">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="footer-bottom">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-6 text-md-start">
                                            <p>Copyright 2023 All rights reserved.</p>
                                        </div>
                                        <div className="col-xl-6 col-md-6 text-md-end">
                                            <span className="copyright-text">Desgined by <a href="https://www.reubentomy.com/" target="_blank">Reuben Tomy</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="bg1 dz-move" src="assets/images/background/pic5.png" alt="/" />
                        <img className="bg2 dz-move" src="assets/images/background/pic6.png" alt="/" />
                    </footer>
        )
    }
} 

export default Footer