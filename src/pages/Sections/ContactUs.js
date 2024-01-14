import React from "react";  

const backgroundImageStyle5 = {
    backgroundImage: "url('assets/images/background/pic13.png')",
    backgroundAttachment: "fixed"
};

class ContactUs extends React.Component{
    render(){
        return(
            <div className="container contact-area bg-parallax" style={backgroundImageStyle5}>
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 m-b30">
                        <div className="contact-head">
                            <h4 className="title text-white wow fadeInUp" data-wow-delay="0.2s">Want to order in bulk?</h4>
                            <p className="text-white opacity-75 wow fadeInUp" data-wow-delay="0.4s">Inquire about bulk food orders for a diverse culinary experience. We offer quality products tailored to your quantity needs.</p>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 m-b30 m-xl-b50 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="input-group input-line">
                                        <div className="input-group-prepand">
                                            <i className="flaticon-user"></i>
                                        </div>
                                        <input name="dzFirstName" required type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="input-group input-line">
                                        <div className="input-group-prepand">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <input name="dzPhoneNumber" required type="text" className="form-control dz-number" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="input-group input-line">
                                        <div className="input-group-prepand">
                                            <i className="flaticon-email-1"></i>
                                        </div>
                                        <input name="dzEmail" required type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 ">
                                    <button type="button" className="btn btn-md btn-primary btn-hover-3 mt-3">
                                        <span className="btn-text" data-text="Book a Table">Submit</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="widget widget_working bg-primary wow fadeInUp" data-wow-delay="0.4s">
                            <div className="head">
                                <h5 className="title text-white">Contact Info</h5>
                                <p className="text-white opacity-75">Feel free to contact us via phone or visit our store for further assistance. We look forward to hearing from you!</p>
                            </div>
                            <ul>
                                <li>
                                    <i className="flaticon-placeholder"></i>
                                    <p>Opp. Vijayamatha Church, Chiyyaram, Thrissur, Thrissur, India, Kerala</p>
                                </li>
                                <li>
                                    <i className="flaticon-telephone"></i>
                                    <p>+098478 81981</p>
                                </li>
                                <li>
                                    <i className="flaticon-email-1"></i>
                                    <p>lalithamfoods@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs