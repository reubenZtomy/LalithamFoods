import React, { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FeaturedSection from "../Sections/FeaturedSection";
import { useParams, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import $ from 'jquery';

const divStyle = {
    backgroundImage: "url('assets/images/banner/bnr1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

const ProductDetails = (productsData) => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = productsData.products[productId];
    const quantities = productsData.products[productId].available_quantities
    const [selectedQuantity, setSelectedQuantity] = useState(quantities[0]);
    const [cartItems, setCartItems] = useState([]);
    const [CartItemTotal, setCartItemTotal] = useState();
    const [CartItemsCount, setCartItemsCount] = useState();
    const itemQuantity = selectedQuantity;
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Carousel = require('react-responsive-carousel').Carousel;
    var Counter = 0;

    const handleQuantityChange = (quantity) => {
        setSelectedQuantity(quantity);
        // You can perform additional actions based on the selected quantity
    };
    const getPriceForQuantity = (quantity) => {
        const selectedOption = product.available_quantities.indexOf(quantity);
        return product.Price[selectedOption] // Default value if not found
    };

    const removeitemFromCart = (index) => {
        // Use filter to create a new array excluding the item with the specified id
        const updatedItems = cartItems.slice(0, index).concat(cartItems.slice(index + 1));
        console.log(updatedItems)
        // Set the state with the updated array
        const elementToRemoveClassFrom = document.getElementById(`removeItem_${index}`);

        // Add a class using classList
        elementToRemoveClassFrom.classList.add('item-removed');
        setTimeout(() => {
            setCartItems(updatedItems);
            const totalPrice = updatedItems.reduce((acc, item) => acc + (parseInt(item.price) * parseInt(item.itemCount)), 0);
            const totalCount = updatedItems.length;
            setCartItemTotal(totalPrice);
            setCartItemsCount(totalCount);
        }, 500);
    };

    useEffect(() => {
        setCartItemTotal(0);
        setCartItemsCount(0);
        // Load cart items from localStorage when the component mounts
        const storedCartItems = localStorage.getItem('cartItems');
        const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

        if (parsedCartItems) {
            console.log(parsedCartItems);
            const totalPrice = parsedCartItems.reduce((acc, item) => acc + (parseInt(item.price) * parseInt(item.itemCount)), 0);
            const totalCount = parsedCartItems.length;
            setCartItemTotal(totalPrice);
            setCartItemsCount(totalCount);
        }
        setCartItems(parsedCartItems);
    }, []);

    const addToCart = (product) => {
        product.itemCount = document.getElementById("demo_vertical2").value
        console.log("Submitted Item : ", product);
        if (cartItems[0] != null) {
            const existingItem = cartItems.find((item) => item.id === product.id && item.itemQuantity === product.itemQuantity);

            if (existingItem) {
                console.log("Item Exists");
                setCartItems((prevItems) =>
                    prevItems.map((item) =>
                        item.id === product.id && item.itemQuantity === product.itemQuantity ? { ...item, itemCount: (parseInt(item.itemCount) + parseInt(product.itemCount)).toString() } : item
                    )
                );
                const totalPrice = CartItemTotal + parseInt(product.itemCount) * parseInt(product.price);
                setCartItemTotal(totalPrice);
            } else {
                console.log("Cart Does not Exist");
                // If item doesn't exist, add it to the cart with the specified itemCount
                setCartItems((prevItems) => [...prevItems, { ...product }]);
                console.log("New Cart has been set :", cartItems);
                const totalPrice = CartItemTotal + parseInt(product.itemCount) * parseInt(product.price);
                setCartItemTotal(totalPrice);
                const totalCount = cartItems.length + 1;
                console.log("Cart count : ", { totalCount })
                setCartItemsCount(totalCount);
            }
        }
        else {
            console.log("Cart Does not Exist 1");
            setCartItems((prevItems) => [...prevItems, { ...product }]);
            console.log(parseInt(product.itemCount), "x", parseInt(product.price))
            const totalPrice = parseInt(product.itemCount) * parseInt(product.price);
            const totalCount = 1;
            setCartItemTotal(totalPrice);
            setCartItemsCount(totalCount);
        }
    };

    // Save cart items to localStorage whenever the cartItems state changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems]);

    const GotoCart = () => {
        window.location = "/Cart"
    }

    return (
        <>

            {/* <!-- Header --> */}
            <header className="site-header mo-left header header-transparent style-1">
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">

                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion">
                                <a href="/" className="anim-logo"><img src="assets/images/logo.png" alt="/" /></a>
                                <a href="/" className="anim-logo-white"><img src="assets/images/logo2.png" alt="/" /></a>
                            </div>

                            {/* <!-- Nav Toggle Button --> */}
                            <div onClick={() => GotoCart()} className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <button type="button" className="btn btn-white btn-square btn-shadow cart-btn">
                                    <i className="flaticon-shopping-bag-1"></i>
                                </button>
                            </div>

                            {/* <!-- EXTRA NAV --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul>
                                        <li>
                                            <button type="button" className="btn btn-white btn-square btn-shadow cart-btn">
                                                <i className="flaticon-shopping-bag-1"></i>
                                                <span className="badge">{CartItemsCount}</span>
                                            </button>
                                            <ul className="dropdown-menu cart-list">
                                                {cartItems.map((item, index) => (
                                                    <li key={index} className="cart-item" id={`removeItem_${index}`}>
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="product-detail.html">
                                                                    <img alt="/" className="media-object" src={item.imgUrl} />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title"><a href="product-detail.html" className="media-heading">{item.name}({item.itemQuantity}x{item.itemCount})</a></h6>
                                                                <span className="dz-price">₹{item.price}.00</span>
                                                                <span className="item-close" onClick={() => removeitemFromCart(index)}>&times;</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                                <li className="cart-item text-center d-flex justify-content-between">
                                                    <h6 className="text-primary mb-0">Total:</h6>
                                                    <h6 className="text-primary mb-0">₹{CartItemTotal}.00</h6>
                                                </li>
                                                <li className="text-center d-flex">
                                                    <a href="/Cart" className="btn btn-primary me-2 w-100 d-block btn-hover-1"><span>View Cart</span></a>
                                                    <a href="/Menu" className="btn btn-outline-primary w-100 d-block btn-hover-1"><span>Menu</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- EXTRA NAV --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
            {/* <!-- Header --> */}

            <div className="page-content bg-white">
                {/* <!-- Banner  --> */}
                <div className="dz-bnr-inr style-1 text-center bg-parallax" style={divStyle}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Product Detail</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Banner End --> */}

                {/* <!-- Product Detail Section --> */}
                <section className="content-inner-1 overflow-hidden">
                    <div className="container">
                        <div className="row product-detail">
                            <div className="col-lg-4 col-md-5">
                                <div className="detail-media m-b30">
                                    <Carousel showArrows={false}  >
                                        {product.imglink.map((product, index) => (
                                            <div id={index}>
                                                <img height={500} src={product} alt="/" style={{ borderRadius: 10 }} />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="detail-info">
                                    <span className="badge" hidden>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                            <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                        </svg>
                                        Pure veg
                                    </span>
                                    <div className="dz-head">
                                        <h2 className="title">{product.itemName}</h2>
                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i> <span><strong className="text-dark">{product.Reviews_rating}</strong> - {product.Review_count} Reviews</span>
                                        </div>
                                    </div>
                                    <p className="text">{product.itemDescription_short}</p>
                                    <ul className="detail-list">
                                        <li>Price <span className="text-primary m-t5" id="PriceOfSelectedQuantity">₹{getPriceForQuantity(selectedQuantity)}.00</span></li>

                                        <li>Quantity
                                            <div className="btn-quantity style-1 m-t5">
                                                <input id="demo_vertical2" type="number" defaultValue="1" min={"1"} name="demo_vertical2" />
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 className="title">Quantity</h6>
                                    <ul className="add-product">
                                        {quantities.map((quantity, index) => (
                                            <li key={index}><div className="mini-modal">
                                                <div className="dz-media">
                                                    <img src="assets/images/modal/mini/pic1.jpg" alt="/" />
                                                </div>
                                                <div className="dz-content">
                                                    <p className="title">{quantity}</p>
                                                    <div className="form-check search-content">
                                                        <input value={quantity}
                                                            checked={selectedQuantity === quantity}
                                                            onChange={() => handleQuantityChange(quantity)}
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="item_quantity" />
                                                    </div>
                                                </div>
                                            </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="d-lg-flex justify-content-between" >
                                        <ul className="modal-btn-group">
                                            <li><a onClick={() => addToCart({ id: productId, name: product.itemName, itemQuantity: itemQuantity, itemCount: 1, imgUrl: product.imglink[0], price: getPriceForQuantity(selectedQuantity) })} className="btn btn-primary btn-hover-1"><span>Add To Cart <i className="flaticon-shopping-bag-1 m-l10"></i></span></a></li>
                                            <li><a href="shop-checkout.html" className="btn btn-outline-secondary btn-hover-1"><span>Buy Now <i className="flaticon-shopping-cart m-l10"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="content-inner pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav nav-tabs tabs-style-1">
                                    <li className="nav-item">
                                        <button className="nav-link active" data-bs-toggle="tab" href="#web-design-1">
                                            <i className="icon-globe"></i>
                                            <span className="d-none d-md-inline-block m-l10">Description</span>
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="web-design-1" className="tab-pane active">
                                        {product.itemDescription_long[0]}
                                        <br />
                                        <br />
                                        <br />
                                        {product.itemDescription_long[1]}
                                    </div>
                                    <div id="graphic-design-1" className="tab-pane">
                                        <table className="table-bordered check-tbl">
                                            <tbody>
                                                <tr>
                                                    <td>Cheese Burger</td>
                                                    <td>Small, Medium & Large</td>
                                                </tr>
                                                <tr>
                                                    <td>Toppings</td>
                                                    <td>Onion, Tomato, Olives</td>
                                                </tr>
                                                <tr>
                                                    <td>Rating</td>
                                                    <td>
                                                        <span className="rating-bx">
                                                            <i className="fas fa-star text-secondary"></i>
                                                            <i className="fas fa-star text-secondary"></i>
                                                            <i className="fas fa-star text-secondary"></i>
                                                            <i className="fas fa-star text-secondary"></i>
                                                            <i className="far fa-star text-secondary"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charges</td>
                                                    <td>Free Shipping</td>
                                                </tr>
                                                <tr>
                                                    <td>Add More</td>
                                                    <td>Coke, Cheese, Choco lava</td>
                                                </tr>
                                                <tr>
                                                    <td>Delivery Time</td>
                                                    <td>30 mins</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FeaturedSection />

            </div>
            <footer className="site-footer style-1 bg-dark" id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget_getintuch">
                                    <h5 className="footer-title">Contact</h5>
                                    <ul>
                                        <li>
                                            <i className="flaticon-placeholder"></i>
                                            <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                                        </li>
                                        <li>
                                            <i className="flaticon-telephone"></i>
                                            <p>+91 987-654-3210<br />
                                                +91 123-456-7890</p>
                                        </li>
                                        <li>
                                            <i className="flaticon-email-1"></i>
                                            <p>info@example.com<br />
                                                info@example.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">Our Links</h5>
                                    <ul>
                                        <li><a href="index.html"><span>Home</span></a></li>
                                        <li><a href="about-us.html"><span>About Us</span></a></li>
                                        <li><a href="services.html"><span>Services</span></a></li>
                                        <li><a href="team.html"><span>Team</span></a></li>
                                        <li><a href="blog-standard.html"><span>Blog</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">OUR SERVICES</h5>
                                    <ul>
                                        <li><a href="blog-open-gutenberg.html"><span>Strategy & Research</span></a></li>
                                        <li><a href="services.html"><span>Fast Delivery</span></a></li>
                                        <li><a href="contact-us.html"><span>Seat Reservation</span></a></li>
                                        <li><a href="shop-style-1.html"><span>Pickup In Store</span></a></li>
                                        <li><a href="our-menu-1.html"><span>Our Menu</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6	">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">Help Center</h5>
                                    <ul>
                                        <li><a href="faq.html"><span>FAQ</span></a></li>
                                        <li><a href="shop-style-1.html"><span>Shop</span></a></li>
                                        <li><a href="shop-style-2.html"><span>Category Filter</span></a></li>
                                        <li><a href="testimonial.html"><span>Testimonials</span></a></li>
                                        <li><a href="contact-us.html"><span>Contact Us</span></a></li>
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
                                <span className="copyright-text">Crafted With <span className="heart"></span> by <a href="https://dexignzone.com/" target="_blank">DexignZone</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="bg1 dz-move" src="assets/images/background/pic5.png" alt="/" />
                <img className="bg2 dz-move" src="assets/images/background/pic6.png" alt="/" />
            </footer>

            <div className="scroltop-progress scroltop-primary">
                <svg width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>

            </div >
        </>

    )
}

export default ProductDetails