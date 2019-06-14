import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export default class RenderPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                      <div className="alert alert-warning">Please Edit your cart the cart is empty</div>    
               <Footer />     
            </div>
        )
    }
}
