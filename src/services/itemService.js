import axios from 'axios' ;

  export const data = [ 

    {
        _id: "151516516516161",
        title: "PHOTO",
        description: "Book your professional recording session today with one of our recording engineers. From Top-Industry sought after equipment to award winning audio engineers. We are here to help ensure your music/project is presented at an industry commercial sound quality.",
        image:"photo.jpg",
        price: 122.33,
        category: "marketing",
        discount: 5,

    },
    {
        _id: "151516516516162",
        title: "RECORDING",
        description: "After your music is professionally recorded. It's time to get it professionally mixed. We use multiple mix techniques including detailed eq, dynamic processing, vocal tuning, spacial enhancement, drum tuning and more to turn your recording into a polished professional mix.",
        image:"recording.jpg",
        price: 135,
        category: "studio",
        discount: 5,

    },
    {
        _id: "151516516516163",
        title: "MASTERING",
        description: "This is the final step after your music/project has been professionally mixed. In this stage, we prepare your music for commercial release. This includes bass enhancement, Compression, mastering volume & final equalization, Stereo widening so your music will translate the same across multiple platforms.",
        image:"marketing.jpg",
        price:161,
        category: "recording",
        discount: 5,

    },
];

class ItemService { 

    async getCatalog() {
    
        let response =  await axios.get("http://127.0.0.1:5000/api/catalog" );
        return response.data;
    }
    
    
    async saveItem(item) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", item);
        let newItem = response.data;
        if(!newItem._id) {
            newItem._id = Math.random().toString();
        }
        return newItem;
    }
 
    



    
    async getCategories() {
        
        let response= await axios.get("http://127.0.0.1:5000/api/catagories");
        return response.data;
    }
    
    async validateCode(code) {
        let response = await axios.get("http://127.0.0.1:5000/api/discountCode/" + code);
        return response.data;
    }



   async placeOrder(order) {

     let response = await axios.post("http://127.0.0.1:5000/api/order" , order);
     return response.data;
   }

   getStock(itemId)  {}

   getItemPrice(coupon) {}

}

export default ItemService;





