import React, { Component } from 'react'
import Navbar from './Archs/Navbar';
import Footer from './Archs/Footer'
import axios from 'axios';
import OrderDetails from './Archs/OrderDetails';
import RenderPage from './Archs/RenderPage';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      api_response:[],
      order_id:0,
      Res_name:'',
      Res_City:'',
      Res_Street:'',
      Res_ZipCode:'',
      bool:false,
      bz:[],
      pz:[],
      checker:false
    }
    this.submit_order  = this.submit_order.bind(this);
    this.burgers = this.burgers.bind(this);
    this.Pizza = this.Pizza.bind(this);
    this.burgers_delete = this.burgers_delete.bind(this);
    this.Pizza_delete = this.Pizza_delete.bind(this);
  }
  componentDidMount(){
    axios.get('https://indapi.kumba.io/webdev/assignment')
    .then(data=>{
      this.setState({
          api_response:data.data,
          order_id:data.data.order_id,
          Res_name:data.data.restaurant.name,
          Res_City:data.data.restaurant.city,
          Res_Street:data.data.restaurant.street,
          Res_ZipCode:data.data.restaurant.zipcode,
          
      })
      const items = data.data.items;
      items.forEach((element)=>{
        if(element.category==='Burgers'){
          if(element.name === 'Veg Cheese Burger'){
            let data={
              bg_qt:0,
              bz_price:element.price/2,
              bz_tax:element.tax,
              bz_name:element.name,
              type:'cheese'
            }
            this.state.bz.push(data);
          }else{
            let data={
              bg_qt:0,
              bz_price:element.price,
              bz_tax:element.tax,
              bz_name:element.name,
              type:'Chicken'
            }
            this.state.bz.push(data);
          }
        }else{
          let data={
            pz_qt:0,
            pz_tax:element.tax,
            pz_price:element.price,
            pz_name:element.name,
            type:'Veg'
          }
          this.state.pz.push(data);
        }
      })
    })
    .catch(err=>console.log(err));
  }
  submit_order(e){
    if(this.state.bool===true){
      this.setState({
        bool:false
      })
    }else{
      this.setState({
        bool:true
      })
    }
  }
  burgers(e){
    const type = e.target.id;
    const {bz} = this.state;
    if(type==='cheese'){
        if(window.confirm('do you want The Chicken Burger in your cart')){
          this.state.bz[1].bg_qt =  this.state.bz[1].bg_qt+1;
          this.state.checker = true
        }
    }else{
     if(window.confirm('do you want The Cheese Burger in your cart')){
        this.state.bz[0].bg_qt =  this.state.bz[0].bg_qt+1;
        this.state.checker = true
     }
    }
  }
  burgers_delete(e){
    const type = e.target.id;
    const {bz} = this.state;
    if(type==='cheese'){
       if(window.confirm('do you want to delete The Chicken Burger from cart')){
        this.state.bz[1].bg_qt =  this.state.bz[1].bg_qt-1;
        if(this.state.bz[1].bg_qt>0){
          this.state.checker = true;
        }else{
          this.state.checker = false;
        }
      }
    }else{
     if(window.confirm('do you want to delete The Cheese Burger from cart')){
        this.state.bz[0].bg_qt =  this.state.bz[0].bg_qt-1;
        if(this.state.bz[0].bg_qt>0){
          this.state.checker = true;
        }else{
          this.state.checker = false;
        }
     }
   }
  }
  Pizza(e){
    const type = e.target.id;
    if(type==='Veg'){
        if(window.confirm(("Paneer Tikka Pizza"))){
        this.state.pz[0].pz_qt =  this.state.pz[0].pz_qt+1;
        this.state.checker = true
        }
    }else{
      console.log('The Cheese Pizza');
      alert('please look the items now available in restaurent')

    }
  }
  Pizza_delete(e){
    const type = e.target.id;
    if(type==='Veg'){
      if(window.confirm(("Paneer Tikka Pizza"))){
      this.state.pz[0].pz_qt =  this.state.pz[0].pz_qt-1;
      if(this.state.pz[0].pz_qt>0){
        this.state.checker = true;
      }else{
        this.state.checker = false;
      }
      }
    }else{
      console.log('The Cheese Pizza');
         alert('please look the items now available in restaurent')
    }
  }
  render() {
    const {checker,bool,api_response,bz,pz} = this.state;
    if(!bool){
      if(!api_response.length){
        return (
          <div className="Main">
            <Navbar />
            <div className="container mt-3">
              <div className="lead bg-secondary">Order Delicious Food</div>
                <div className="row mt-2">
                  <div className="col-md-8">
                    <div className="list-group bg-light">
                      <div className="list-group-item">
                        <h1>Burgers</h1>
                        <p>
                            <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapse_burgers" aria-expanded="false" aria-controls="collapseExample">
                             Order  Burgers
                            </button>
                          </p>
                          <div className="collapse" id="collapse_burgers">
                            <div className="card card-body">
                                <li className="list-group">
                                  <div className="list-group-item" name="chicken">
                                  Veg Cheese Burger
                                    <div className="btn btn-success float-right ml-1" id="chicken" onClick={this.burgers}>Add</div>
                                    <div className="btn btn-danger float-right" id="chicken" onClick={this.burgers_delete}>X</div>
                                  </div>
                                  <div className="list-group-item" name="cheese">
                                  Chicken Burger
                                    <div className="btn btn-success float-right ml-1" id="cheese" onClick={this.burgers}>Add</div>
                                    <div className="btn btn-danger float-right ml-1" id="cheese" onClick={this.burgers_delete}>X</div>
                                  </div>
                                </li>
                            </div>
                          </div>
                      </div>
                      <div className="list-group-item">
                      <h1>Pizzas</h1>
                        <p>
                            <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapse_Pizzas" aria-expanded="false" aria-controls="collapseExample">
                              Order Pizzas
                            </button>
                          </p>
                          <div className="collapse" id="collapse_Pizzas">
                            <div className="card card-body">
                                <li className="list-group">
                                  <div className="list-group-item" >
                                    Veg Pizza
                                    <div className="btn btn-success float-right ml-1"id="Veg" onClick={this.Pizza}>Add</div>
                                    <div className="btn btn-danger float-right"id="Veg" onClick={this.Pizza_delete}>X</div>
                                  </div>
                                  <div className="list-group-item" name="cheese">
                                    Veg Cheese Pizza
                                    <div className="btn btn-success float-right ml-1" id="Cheese" onClick={this.Pizza}>Add</div>
                                    <div className="btn btn-danger float-right" id="Cheese" onClick={this.Pizza_delete}>X</div>
                                  </div>
                                </li>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="jumbotron">
                      <div className="lead">
                        We Know Provide Only
                        <div className="list-group">
                          <div className="list-group-item">Paneer Tikka Pizza</div>
                          <div className="list-group-item">Veg Cheese Burger</div>
                          <div className="list-group-item">Chicken Burger</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <button className="btn btn-outline-info mt-2 ml-4" onClick={this.submit_order}>Order Now </button>
            </div>
          
            <Footer></Footer>
          </div>
        )
      }
    }else{
      if(!checker){
        return (
          <div>
            <RenderPage />
            <button className="btn btn-info mt-2 ml-4" onClick={this.submit_order}>Take Me back to Order Page</button>
          </div>
        )
      }
      return (
        <div className="container">
          <OrderDetails orders={this.state}/>
          <button className="btn btn-info mt-2 ml-4" onClick={this.submit_order}>GO Back To Home</button>
        </div>
      )
    } 
  }
}
