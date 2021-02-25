import React from 'react';
import CardHeader from '../components/CartPages/CartHeader';
import '../styles/Cart.scss';
import CartItems from "../components/CartPages/CartItems";
import Footer from "../components/Layout/Footer";

function Cart() {
    return (
        <div>
            <CardHeader />
            <CartItems />
            <div className="footer" >
                <Footer />
            </div>
        </div>
    )
}
export default Cart;