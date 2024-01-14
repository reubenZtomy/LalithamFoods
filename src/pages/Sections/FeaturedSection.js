import React from "react";
import productsList from '../../items/item_12.json';

const FeaturedSection = () => {
    return (
        <section className="content-inner bg-white overflow-hidden">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="title wow flipInX" data-wow-delay="0.2s">Our Featured Food</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                        
                        <div className="dz-img-box style-2 box-hover">
                            <div className="dz-media">
                                <img src={productsList[23].thumbnail} alt="/" />
                            </div>
                            <div className="dz-content">
                                <h4 className="dz-title"><a href="product-detail.html">{productsList[23].itemName}</a></h4>
                                <p>{productsList[23].itemDescription_short}</p>
                                <h5 className="dz-price text-primary">₹{productsList[23].Price[0]}.00</h5>
                                <a href="/product/23" className="btn btn-primary btn-hover-2"> Description</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="dz-img-box style-2 box-hover">
                            <div className="dz-media">
                                <img src={productsList[24].thumbnail} alt="/" />
                            </div>
                            <div className="dz-content">
                                <h4 className="dz-title"><a href="product-detail.html">{productsList[24].itemName}</a></h4>
                                <p>{productsList[24].itemDescription_short}</p>
                                <h5 className="dz-price text-primary">₹{productsList[24].Price[0]}.00</h5>
                                <a href="/product/24" className="btn btn-primary btn-hover-2"> Description</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="dz-img-box style-2 box-hover">
                            <div className="dz-media">
                                <img src={productsList[9].thumbnail} alt="/" />
                            </div>
                            <div className="dz-content">
                                <h4 className="dz-title"><a href="product-detail.html">{productsList[9].itemName}</a></h4>
                                <p>{productsList[9].itemDescription_short}</p>
                                <h5 className="dz-price text-primary">₹{productsList[9].Price[0]}.00</h5>
                                <a href="/product/9" className="btn btn-primary btn-hover-2"> Description</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="dz-img-box style-2 box-hover">
                            <div className="dz-media">
                                <img src={productsList[10].thumbnail} alt="/" />
                            </div>
                            <div className="dz-content">
                                <h4 className="dz-title"><a href="product-detail.html">{productsList[10].itemName}</a></h4>
                                <p>{productsList[10].itemDescription_short}</p>
                                <h5 className="dz-price text-primary">₹{productsList[10].Price[0]}.00</h5>
                                <a href="/product/10" className="btn btn-primary btn-hover-2"> Description</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection