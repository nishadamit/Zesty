import React from 'react';

function ConfirmCheckoutButton ({clickMe}) {
    return(
        <div className="checkout-button">
          <button type="submit" onClick={clickMe}>Dapi</button>
        </div>
    )
}
export default ConfirmCheckoutButton ;