import React, { useEffect, useState ,useRef } from "react";
import { useNavigate  , Link } from 'react-router-dom';
import ContactUs from "./ContactUs";
import fishImage from "../../assets/images/Icons/fish.png";
import turkeyImage from "../../assets/images/Icons/turkey.png";
import VegImage from "../../assets/images/Icons/leaf.png";
import ChipsImage from "../../assets/images/Icons/chips.png";
import AllImage from "../../assets/images/Icons/AllItems.png";
import DrinksImage from "../../assets/images/Icons/soda.png";
import SweetsImage from "../../assets/images/Icons/sweet.png";
import ComboImage from "../../assets/images/Icons/combo.png"

const backgroundImageStyle5 = {
    backgroundImage: "url('assets/images/background/pic13.png')",
    backgroundAttachment: "fixed"
};


const ItemMenu = ({ productsList }) => {
    const navigate  = useNavigate();
    const AllItemsRef = useRef(null);
    const handleClick = (event) => {
        // Prevent the default scrolling behavior
        event.preventDefault();
    
        // Add your custom logic here if needed
        // For example, you can navigate to a specific section of the page using smooth scrolling
      };

      const handlenavigation = (productId) => {
        // Navigate to the new route
        navigate(`/product/${productId}`);
        
        // Force a full page reload
        window.location.reload();
      };
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
        <section className="content-inner section-wrapper-6 p-b40">
            <div className="container inner-section-wrapper">
                <div className="section-head text-center">
                    <h2 className="title wow flipInX" data-wow-delay="0.2s">From Our Menu</h2>
                </div>
                <div className="row">
                    <div className="col-xl-10 col-lg-9 col-md-12 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="site-filters style-1 clearfix">
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
                    <div className="col-xl-2 col-lg-3 col-md-12 text-lg-end d-lg-block d-none wow fadeInUp" data-wow-delay="0.4s">
                        <a href="/Menu" className="btn btn-outline-primary btn-hover-3"><span className="btn-text" data-text="View All">View All</span></a>
                    </div>
                </div>
                <div className="clearfix">
                    <ul id="masonry" className="row dlab-gallery-listing gallery">
                        {Object.entries(productsList).map(([productId, product]) => (
                           <li key={productId} className={`card-container col-lg-4 col-md-6 col-sm-6 ${product.tags}`} >
                           <div className="dz-img-box style-8" onClick={() => { handlenavigation(productId) }}>
                               <a href="#" onClick={handleClick} title="Sweet Cake" className="dz-media lg-item">
                                   <img src={product.thumbnail} alt="/" width="550" height="370"/>
                               </a>
                               <div className="dz-content">
                                   <div className="dz-head">
                                       <h6 className="title"><a href="#" onClick={handleClick}>{product.itemName}</a></h6>
                                       <span className="font-weight-500">₹{product.Price[0]}.00</span>
                                   </div>
                                   <p className="category">
                                       <div className="dz-head">
                                           <div className="rating">
                                               <i className="fa-solid fa-star"></i> <span><strong className="text-dark">{product.Reviews_rating}</strong> - {product.Review_count} Reviews</span>
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
            <ContactUs />
        </section>
    );
};

export default ItemMenu;