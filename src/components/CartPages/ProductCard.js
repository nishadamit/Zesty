import React from 'react';
import banana from '../../assests/banana.svg';
import discard from '../../assests/discard.svg';
import cross from '../../assests/cross.svg';
function ProductCard() {
    return (
        <div className="product-card d-flex justify-content-between mb-4">
            <div className="items-details d-flex">
                <img src={banana} alt="banana" />
                <div className="d-flex  flex-column justify-content-center mx-3 mt-4" >
                    <p className="items-name">Product Name here</p>
                    <p className="item-type">Breakfast</p>
                </div>
            </div>
            <div className="item-count d-flex align-items-center flex-wrap">
                <p className="item-qty "> QTY</p>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="item-discard d-flex mr-4">
                <img src={discard} alt="discard" className="discard" />
                <img src={cross} alt="cross" className="cross" />
            </div>
        </div>
    )
}
export default ProductCard;