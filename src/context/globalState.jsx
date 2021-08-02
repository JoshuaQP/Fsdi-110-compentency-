import React, { Component} from 'react';
import StoreContext from "./storeContext";

class GlobalState extends Component {
    state = { 
        shoppingList:[],
        cart: [],
     };

    render() { 
        return ( 
        <StoreContext.Provider 
         value={{  
            cart:this.state.cart,
            shoppingList: this.state.shoppingList,  
            addProdToCart: this.addProdToCart,
            addToShoppingList: this.addToShoppingList,
            }}
            >

            {this.props.children}
        </StoreContext.Provider>
        );
    }
     
    addToShoppingList = (text) => {
        let copy =[...this.state.shoppingList];
        copy.push(text);
        this.setState({ shoppingList: copy});

    };


    addProdToCart =(product) => {
        let myCart = [...this.state.cart];

        let found = false;
        for(let i =0; i < myCart.length; i++) {
            let current = myCart[i];
            if(current._id === product._id) {
                found= true;
                current.quantity += product.quantity;
            }

        }
        if(!found) {
            myCart.push(product);
        }
        this.setState({ cart: myCart});

    };
    }
    
    
    export default GlobalState;
    

    // addToShoppingList = (text) => {
    //     let  copy = [...this.state.shoppingList];
    //     copy.push(text);
    //     this.setState({shoppingList: copy});


    // };
  
    // addProdToCart = (product) => {
    //     let myCart = [...this.state.cart];

    //     let found= false;
    //     for(let i=0 ; i< myCart.length; i++) {
    //        let current = myCart[i];
    //        if(current._id === product._id) {
    //            found = true;
    //            current.quantity += product.quantity;
    //        }
    //     }
    //     if (!found){
    //         myCart.push(product);
    //     }

    //     this.setState({cart: myCart});

        // console.log("adding a prod to cart", myCart);
