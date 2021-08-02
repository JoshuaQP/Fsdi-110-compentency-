import React  from 'react';

export default React.createContext({
     products: [],
     categories: [],
     cart: [],
     addProdToCart: (products) => {},
     addToShoppingList: (text) => {},


});