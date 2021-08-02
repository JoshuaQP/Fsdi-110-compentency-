import React, { Component } from 'react';
import "./admin.css";
import ItemService from '../../services/itemService';


class Admin extends Component {
    state = { 
        title: "",
        price: "",
        category: "",
        discount: "",
        image: "",
     };
    render() { 
        return ( 
        <div className="myForm">
            
                    
            <label htmlFor="">Title: </label>
            <input  type="text" name="title"  value={this.state.title} onChange={this.handleInputChange}/> <br/>

            <label htmlFor="">Price: $</label>
            <input type="text" name="price" value ={this.state.price} onChange={this.handleInputChange} /> <br/>

            <label htmlFor="">Category: </label>
            <input type="text" name="category" value ={this.state.category} onChange={this.handleInputChange} /> <br/>

            <label htmlFor="">Discount: </label>
            <input type="text" name="discount" value ={this.state.discount} onChange={this.handleInputChange} /> <br/>

            <label htmlFor="">Image: </label>
            <input type="text" name="image" value ={this.state.image} onChange={this.handleInputChange} /> <br/>

            <button className = "btn btn-dark" onClick={this.handleSave}> Save product </button>
         
        </div>  );
    }

    handleInputChange = (event) => { 
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSave = async() => {
        console.log("saving products");
        let item ={...this.state};
        item.price = item.price * 1;
        item.stock = +item.stock;
        item.categoryminimum = parseInt(item.minimim);

        console.log(item);
        // let item = {...this.state};
        // console.log(item);

        let itemService = new ItemService();
        let response = await itemService.saveItem(item);
        console.log("Saving response", response);

       

    };
}


export default Admin;