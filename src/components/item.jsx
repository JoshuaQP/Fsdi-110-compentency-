import React, { Component } from "react";
import QuantityPicker from "./quanityPicker";
import "./item.css";
import storeContext from "../context/storeContext";

class Item extends Component {
  static contextType = storeContext;
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="pc">
        <img src ={"/images/products/" + this.props.prod.image} alt="item" /> 

        <div className="text-bg">
          <h6>{this.props.prod.title}</h6>
          <p> {this.props.prod.description}</p>
          <label ClassName="total"> Total: {this.getTotal()}</label>
          <label ClassName="total"> Tax: ${this.props.prod.price.toFixed(2)}</label>
        </div>
        <div ClassName="total" >
        <QuantityPicker onValueChange={this.handleQuantityChange}> </QuantityPicker>
        <button onclick={this.handleAddButton}>   </button>
        </div>
      </div>
    );
  }


  
  handleAddButton = () => {
    var copy = {
      ...this.props.prod,
      quantity: this.state.quantity 
    };
    
    
    this.context.addProdToCart(copy);
  };
  
  
  getTotal =() => {
    let total = this.props.prod.price * this.state.quantity;
    return total.toFixed(2);
  };


handleQuantityChange = (quantity) => {
  this.setState({ quantity: quantity});
};
 
}



   export default Item;