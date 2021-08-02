import React, { Component } from 'react';
import storeContext from '../context/storeContext';
import ItemService from '../services/itemService';
import "./cart.css"
import ItemInCart from './itemInCart';



class Cart extends Component {
    static contextType = storeContext;
    state = { 
        couponCode:"",
        discount: 0,
     };
    render() { 
        return ( 
           <div className="cart-page">
                <div className="mycart">
                    <h3>View your cart</h3>
                    <button className="btn"> Purchase order</button>
                </div>  

                <div className="products-container">
                    {this.context.cart.map((prod) => (
                    <ItemInCart key={prod._id} prod={prod}></ItemInCart>
                    ))}
                </div>

                <div className="total-container">
                  <div> Total:{this.getTotal()} </div>
                </div>

                <div>
                    <input name="couponcode" value={this.state.couponCode} type="text" placeholder="Discount Code"  onChange={this.handleInputChange}  > </input>
                    <button className="btn">Validate Code</button>                  
                </div>

                
                    <button  onclick={this.handlePlaceOrder} className="btn">Validate Code</button>                  
                
           
            </div>
            
         );
    }


    handlePlaceOrder = async () => {

        let order = {
            user:"joshua",
            couponCode: this.state.couponCode,
            products: this.context.cart,
            createdOn: new Date(),
        };

        let service = new ItemService();
        let placedOrder = await service.placeOrder(order);
        console.log(placedOrder);
        // api end point:
        // POST 
        // Recieve the ordersave the order in the orders collection


        // FE service:
        // create a method that revies an order
        // send the order to the new endpoint

        // from the cmp:
        // create an instance of the service
        // call the new method
    };

    validatecode =  () => {
        let service = new ItemService();
        let res =  service.validateCode(this.state.couponCode);
        console.log(res);
        if(res.error){
            alert("invaild Code")
        }
        else {
            console.log("you got a discount for" + res.discount + "%");
            this.setState({discount: res.discount});
        }
        


        // create a method on the service
    // will call the new endpoint on the server

    // create an instance of the service
    // call the new method

        
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

// 1hr


    getTotal = () =>  {
        let total= 0;
        for( let i=0; i < this.context.cart.length; i++) {
           let product = this.context.cart[i];
           total += product.quantity * product.price;
           


        }

        let discount = total * (this.state.discount/100);
        return (total - discount).toFixed(2);

        /**
 * How to start the projects:
 * 
 * - Start mongo service:
 * sudo service mongodb start
 * 
 * - start the backend 
 * source venv/bin/activate
 * ./runserver
 * 
 * 
 * - start the front end
 * npm start
 * 
 */

    };
}
 
export default Cart;