import React, { Component } from 'react';
import Item from '../item';
import "./catalog.css";
import ItemService from "../../services/itemService";
import {data} from "../../services/itemService";




class Catalog extends Component {
    state = {  
        items: [ ],
        categories: [],
        selectedCategory: "",
    };

  
    render() { 
        let itemsToDisplay = this.state.items;
        itemsToDisplay = this.state.items.sort((a,b) => a.price < b.price);
        if (this.state.selectedCategory) {
            itemsToDisplay = itemsToDisplay.filter((item) => item.category === this.state.selectedCategory);
        }

        return (
            
            <div className="catalog-page">

                <h3>catalog {this.state.items.length}</h3>
                <div className="filter-button">

                <button onClick={() => this.filterItems("") } className="btn btn-info"> All Items </button>

                {this.state.categories.map((cat) => (
                <button onClick={() => this.filterItems(cat) } className="btn btn-info" key={cat}>
                     {cat}
                </button> 
                ))}
                </div>
                <div className="item-container">
                    {itemsToDisplay.map((prod) => (
                        <Item key={prod._id} prod={prod}></Item>
                    ))}

                </div>         
            </div>      
    
        );
    }
    filterItems = (category) => {
        console.log("filitering", category);
        this.setState({ selectedCategory : category });
      }
    
     
    async componentDidMount() {
        var itemService = new ItemService();

        var items =await ItemService.getCatalog();
        console.log(items);
        this.setState({ items: data });
       
        // var itemService = new ItemService();
        // var items = await itemService.getCatalog();
        // console.log(items);
        // this.setState({ items: items });
    
        
        // let cats = await itemService.getCategories();
        // console.log("category from server", cats);
        
        // this.setState({ categories: cats});
    }

    //     for(let i=0; i < items.length; i++){
    //       let cat = items[i].category;
    
    //       if(!cats.includes(cat)){
    //         cats.push(cat);
    //       }
    //     }
    
    //     this.setState({ categories: cats });
    //   }


    // async componentDidMount() {
    //   console.log("did mount")


    //   //call ther service to get the list of items

    //    var itemService = new ItemService();
    //    var items = await itemService.getCatalog();
    //    this.setState({ items: items});
       

    //    let cats= await itemService.getCategory();
    //    console.log("caregories from server", cats);


    //    this.setState({categories: cats });
    // }

}
export default Catalog;