import React from 'react';
import "../css/cart.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
const Cart = () => {
    return (
        <div>
            <Header/>
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <table className="cart-table">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Product 1</td>
                    <td>$10</td>
                    <td>2</td>
                    <td>$20</td>
                    <td><a href="#">Remove</a></td>
                </tr>
                <tr>
                    <td>Product 2</td>
                    <td>$15</td>
                    <td>1</td>
                    <td>$15</td>
                    <td><a href="#">Remove</a></td>
                </tr>
                <tr>
                    <td>Product 3</td>
                    <td>$20</td>
                    <td>3</td>
                    <td>$60</td>
                    <td><a href="#">Remove</a></td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="3">Total:</td>
                    <td>$95</td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
            <a href="#" className="checkout-btn">Proceed to Checkout</a>
        </div>
        <Footer/>
        </div>
    );
};

export default Cart;