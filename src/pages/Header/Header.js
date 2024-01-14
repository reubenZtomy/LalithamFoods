import React, { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Header = (productsData) => {
    const [cartItems, setCartItems] = useState([]);
    const [CartItemTotal, setCartItemTotal] = useState();
    const [CartItemsCount, setCartItemsCount] = useState();

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
            const totalPrice = updatedItems.reduce((acc, item) => acc + parseInt(item.price), 0);
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

    const GotoCart = () => {
        window.location = "/Cart"
    }
    return (
        < header className="site-header mo-left header header-transparent transparent-white style-1" >
            {/* <!-- Main Header --> */}
            < div className="sticky-header main-bar-wraper navbar-expand-lg" >
                <div className="main-bar clearfix ">
                    <div className="container clearfix">

                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion">
                            <a href="/" className="anim-logo"><img src="assets/images/logo.png" alt="/" /></a>
                        </div>

                        {/* <!-- Nav Toggle Button --> */}
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
            </div >
            {/* <!-- Main Header End --> */}
        </header >
    )
}

export default Header;
