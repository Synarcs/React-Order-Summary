import React from 'react';
import Navbar from '../Archs/Navbar';
import Footer from '../Archs/Footer';
import CSS from '../App.css'

export default class Success extends React.Component {
    render() {
        const {Res_City,Res_name,Res_Street,Res_ZipCode,bz,pz,order_Id} = this.props.orders;   
    const Total = parseFloat(Math.floor(bz[0].bz_price*bz[0].bg_qt+bz[0].bz_tax*bz[0].bg_qt + bz[1].bz_price*bz[1].bg_qt+bz[1].bz_tax*bz[1].bg_qt  + pz[0].pz_price*pz[0].pz_qt+pz[0].pz_tax*pz[0].pz_qt)).toFixed(2);
        return (
            <div>
                <Navbar />
                <span className="lead">Thank you for ordering food with us</span><br/>
                <span>Restaurent Name:{Res_name}
                                  Restaurent City:{Res_City} <br/>
                                  Restaurent Street:{Res_Street} <br/>
                                  Restaurent ZipCode:{Res_ZipCode} <br/>
                            </span>
                        <div className="container bg-dark" id="final">
                            
                            <div className="lead mt-3 text-warning">Your Order Details</div>
                            <div className="col-md-11">
                                <div className="list-group ">
                                    <div className="list-group-item bg-warning">
                                        <span>
                                            <span> Name:{bz[1].bz_name}</span>   
                                            <span className="ml-3"> Quantity:{bz[1].bg_qt}</span> 
                                            <span className="ml-3"> Tax: {bz[1].bz_tax}</span>
                                            <span className="ml-3"> Price: {bz[1].bz_price}</span>
                                            <span className="ml-3"> With Tax Total Amount: {bz[1].bg_qt===0 ?  0 :bz[1].bz_price*bz[1].bg_qt+bz[1].bz_tax*bz[0].bg_qt}</span>
                                        </span>
                                    </div>
                                    <div className="list-group-item bg-info ">
                                        <span>
                                            <span> Name:{bz[0].bz_name}</span>   
                                            <span className="ml-3"> Quantity:{bz[0].bg_qt}</span> 
                                            <span className="ml-3"> Tax: {bz[0].bz_tax}</span>
                                            <span className="ml-3"> Price: {bz[0].bz_price}</span>
                                            <span className="ml-3"> With Tax Total Amount: {bz[0].bg_qt ===0 ? 0 :bz[0].bz_price*bz[0].bg_qt+bz[0].bz_tax*bz[0].bg_qt}</span>
                                        </span>
                                    </div>
                                    <div className="list-group-item bg-danger ">
                                        <span>
                                            <span> Name:{pz[0].pz_name}</span>   
                                            <span className="ml-3"> Quantity:{pz[0].pz_qt}</span> 
                                            <span className="ml-3"> Tax: {pz[0].pz_tax}</span>
                                            <span className="ml-3"> Price: {pz[0].pz_price}</span>
                                            <span className="ml-3"> With Tax Total Amount: {pz[0].pz_qt===0 ? 0 :pz[0].pz_price*pz[0].pz_qt+pz[0].pz_tax*pz[0].pz_qt}</span>
                                        </span>
                                    </div>
                                </div>
                                <span className="float-right"><b> Total:Rs{Total}</b></span>
                              
                            </div>
                            <span className="text-warning">Order ID {order_Id}</span>                            
                    </div>
                    <button className="btn btn-warning float-right mt-4 ml-4" onClick={this.finalize} >
                                            Place a Order
                    </button>
                <Footer />
            </div>
        )
    }
}
