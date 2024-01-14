import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import fishImage from "../../assets/images/Icons/fish.png";
import turkeyImage from "../../assets/images/Icons/turkey.png";
import VegImage from "../../assets/images/Icons/leaf.png";
import ChipsImage from "../../assets/images/Icons/chips.png";
import AllImage from "../../assets/images/Icons/AllItems.png";
import DrinksImage from "../../assets/images/Icons/soda.png";
import SweetsImage from "../../assets/images/Icons/sweet.png";
import ComboImage from "../../assets/images/Icons/combo.png"

const containerStyle = {
    backgroundImage: "url('assets/images/banner/bnr2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add any other styles you need
};
const handleClick = (event) => {
    // Prevent the default scrolling behavior
    event.preventDefault();

    // Add your custom logic here if needed
    // For example, you can navigate to a specific section of the page using smooth scrolling
};
const MenuMain = ({ productsList }) => {
    const navigate = useNavigate();
    const AllItemsRef = useRef(null);
    const [cartItems, setCartItems] = useState([]);
    const [CartItemTotal, setCartItemTotal] = useState();
    const [CartItemsCount, setCartItemsCount] = useState();
    const handlenavigation = (productId) => {
        // Navigate to the new route
        navigate(`/product/${productId}`);

        // Force a full page reload
        window.location.reload();
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

    // Save cart items to localStorage whenever the cartItems state changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems]);


    useEffect(() => {
        // Access the DOM element using the ref
        const myElement = AllItemsRef.current;

        // Check if the element exists before simulating a click
        if (myElement) {
            // Simulate a click on the element
            myElement.click();
        }
    }, []);


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
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

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
                                                                    <img alt="/" className="media-object" src={item.imglink} />
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

                            {/* <!-- Header Nav --> */}
                            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                <div className="logo-header">
                                    <a href="index.html" className="anim-logo"><img src="assets/images/logo.png" alt="/" /></a>
                                </div>
                                <ul className="nav navbar-nav navbar white">
                                    <li className="sub-menu"><a href="#">Home</a>
                                    </li>
                                    <li className="has-mega-menu">
                                        <a href="#">Categories</a>
                                        <ul className="mega-menu">
                                            <li><a href="#">Categories</a>
                                                <ul>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-detail.html">Team Detail</a></li>
                                                    <li><a href="testimonial.html">Testimonial</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="service-detail.html">Service Detail</a></li>
                                                    <li><a href="error-404.html">Error 404</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="under-maintenance.html">Under Maintenance</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Our Menus</a>
                                                <ul>
                                                    <li><a href="our-menu-1.html">Menu Style 1</a></li>
                                                    <li><a href="our-menu-2.html">Menu Style 2</a></li>
                                                    <li><a href="our-menu-3.html">Menu Style 3</a></li>
                                                    <li><a href="our-menu-4.html">Menu Style 4</a></li>
                                                    <li><a href="our-menu-5.html">Menu Style 5</a></li>
                                                </ul>
                                            </li>
                                            <li className="header-adv p-0"><img src="assets/images/adv-media.jpg" alt="/"></img></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu"><a href="#">Reviews</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                        <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a></li>
                                        <li><a target="_blank" className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
                                        <li><a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
            {/* <!-- Header --> */}


            <div className="page-content bg-white">
                {/* <!-- Banner  --> */}
                <div className="dz-bnr-inr style-1 text-center bg-parallax" style={containerStyle}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Our Menu</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Menu</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Banner End --> */}

                {/* <!-- Team Section --> */}
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="site-filters style-2 clearfix mb-lg-5 mb-md-4 ">
                                    <ul className="filters" data-bs-toggle="buttons">
                                        <li ref={AllItemsRef} data-filter=".All" className="btn active"><a onClick={handleClick} href="#"><span><i className="flaticon-fast-food "></i></span>All</a></li>
                                        <li data-filter=".sweets" className="btn"><a onClick={handleClick} href="#"><span><img src={SweetsImage} className="shakeimage" /></span>Sweets</a></li>
                                        <li data-filter=".drinks" className="btn"><a onClick={handleClick} href="#"><span><img src={DrinksImage} className="shakeimage" /></span>Drinks</a></li>
                                        <li data-filter=".chips" className="btn"><a onClick={handleClick} href="#"><span><img src={ChipsImage} className="shakeimage" /></span>Chips</a></li>
                                        <li data-filter=".vegpickles" className="btn"><a onClick={handleClick} href="#"><span><img src={VegImage} className="shakeimage" /></span>Veg Pickles</a></li>
                                        <li data-filter=".non-vegpickles" className="btn"><a onClick={handleClick} href="#"><span><img src={turkeyImage} className="shakeimage" /></span>Non-Veg Pickles</a></li>
                                        <li data-filter=".fishes" className="btn"><a onClick={handleClick} href="#"><span><img src={fishImage} className="shakeimage" /></span>Fishes</a></li>
                                        <li data-filter=".combo" className="btn"><a onClick={handleClick} href="#"><span><img src={ComboImage} className="shakeimage" /></span>Combo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" id="lightgallery">
                            <ul id="masonry" className="row dlab-gallery-listing gallery">
                                {Object.entries(productsList).map(([productId, products]) => (
                                    <li key={productId} className={`card-container col-lg-4 col-md-6 col-sm-6 ${products.tags}`} >
                                        <div className="dz-img-box style-8" onClick={() => { handlenavigation(productId) }}>
                                            <a href="#" onClick={handleClick} title="Sweet Cake" className="dz-media lg-item">
                                                <img src={products.thumbnail} alt="/" width="800" height="650" />
                                            </a>
                                            <div className="dz-content">
                                                <div className="dz-head">
                                                    <h6 className="title"><a href="#" onClick={handleClick}>{products.itemName}</a></h6>
                                                    <span className="font-weight-500">₹{products.Price[0]}.00</span>
                                                </div>
                                                <p className="category">
                                                    <div className="dz-head">
                                                        <div className="rating">
                                                            <i className="fa-solid fa-star"></i> <span><strong className="text-dark">{products.Reviews_rating}</strong> - {products.Review_count} Reviews</span>
                                                        </div>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </section>
                {/* <!-- Team Section --> */}

            </div>
            {/* <!--Footer--> */}
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
                {/* <!-- Footer Bottom Part --> */}
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
            {/* <!--Footer--> */}

        </>
    )
}

export default MenuMain