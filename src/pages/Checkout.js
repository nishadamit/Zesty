import React from 'react';
import CardHeader from '../components/CartPages/CartHeader';
import Footer from '../components/Layout/Footer';
import CheckoutDetails from '../components/CheckoutPage/CheckoutDetails';
import '../styles/Checkout.scss';
import HomeNavbar from '../components/Layout/Navbar'

function Checkout() {

  var handler = window.Dapi.create({
    //Intiation Connector with the correct paramteres
    environment: 'sandbox',
    appKey: '797bb4e1467911fc99f6f8b2b1f1afd4afa2c11af9eb8358895c66f206a1605d',
    countries: ['AE'],
    onSuccess: function (meta_data) {
      // console.log(window.Dapi,"Dapi");
      console.log(meta_data, "meta_data")
    },
    onFailure: function (err) {

      if (err != null) {
        console.log('Error')
        console.log(err)
      } else {
        console.log('No error')
      }
    },
  })
  var clickMe = function () {

    handler.open()
  }

  return (
    <div>
      <div className="checkout-new-header">
        <HomeNavbar />
      </div>

      {/* <CardHeader /> */}
      <CheckoutDetails clickMe={clickMe} />
      {/* <button onClick={clickMe}>Click me</button> */}
      <div className="footer" >
        <Footer />
      </div>
    </div>
  )
}
export default Checkout;