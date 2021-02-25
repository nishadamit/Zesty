import React from "react";
import { Cart2 } from "react-bootstrap-icons";
import ProductCard from './ProductCard';
import ActivePlanCard from './ActivePlanCard';
function CartItems() {
    return (
        <div className="cart-items ">
            <p className="cart-heading">Shopping Cart <span>(4 items)</span></p>
            <div className="row">
                <div className="col-lg-8 mt-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="col-lg-4 my-5">
                   <ActivePlanCard />
                </div>
            </div>
        </div>
    )
}
export default CartItems;