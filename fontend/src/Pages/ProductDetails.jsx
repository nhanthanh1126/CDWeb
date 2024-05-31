import React from 'react';
import "../css/productDetails.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
const ProductDetails = () => {
    return (
        <div>
            <Header/>
        <div className="product-detail">
            <header>
                <h1>Product Details</h1>
            </header>

            <div className="container">
                <div className="product-details">
                    <div className="product-image">
                        <img src="images/watch.jpg" alt="Watch"/>
                    </div>
                    <div className="product-info">
                        <h2>Classic Leather Watch</h2>
                        <p>Price: $99.99</p>
                        <p>Color: Black</p>
                        <p>Material: Leather</p>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula placerat
                            lorem at
                            auctor.</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="product-reviews">
                    <h2>Customer Reviews</h2>
                    <ul>
                        <li>
                            <h3>John Doe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique gravida
                                dictum.</p>
                        </li>
                        <li>
                            <h3>Jane Smith</h3>
                            <p>Quisque consectetur orci ac metus gravida consequat. Fusce tristique sem sed diam
                                dignissim,
                                ac
                                viverra quam condimentum.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ProductDetails;