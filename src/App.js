import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Cart from "./components/cart";
import Admin from "./components/admin/admin";
import GlobalState from "./context/globalState";
import ShoppingList from "./components/shoppinglist";
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// import Section from './components/section';


function App() {
  return (
    <GlobalState>
    <BrowserRouter>
      <div className="App">

       <NavBar>  </NavBar>
          
        
       

        
        
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/list" exact component={ShoppingList}></Route>
        </Switch>

        <Footer> </Footer>
      </div>
    </BrowserRouter>
    </GlobalState>
  );
}

export default App;

// Admin

/// admin route
