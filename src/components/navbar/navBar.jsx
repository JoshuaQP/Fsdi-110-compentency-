import React, { Component } from 'react';
import "./navBar.css";
import {Link} from "react-router-dom"
import storeContext from '../../context/storeContext';





class NavBar extends Component {
    static contextType =storeContext;
    state ={}
    render() {


        return( 
          <div className="cf">
        <nav className="navbar navbar-expand-lg navbar-dark bg-gray" >
        <div className="container-fluid">
          
          {/* <Link className="navbar-brand active " href="/#" > <img src="/images/logo.png" alt="/" className="logo-image" />  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="nav-social" >
            
            <h1 className="nav-logo">
		
            <span>M</span>
            <span>U</span>
            <span>S</span>
            <span>I</span>
            <span>C</span>
            <span><img className="nav-img" src="/images/buddha2.png" alt="logo"  /></span>
            <span>S</span>
            <span>y</span>
            <span>N</span>
            <span>C</span>
            
		</h1>
              
          </div>


          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " to="/home"> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about"> About </Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link " to= "/catalog">Catalog </Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link   " to="/contact"> Contact </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/list"><i class="fa fa-heart-o" aria-hidden="true"></i>  Shopping List.. </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-primary" to="/cart">
              <i aria-hidden="true" className="fa fa-cart-plus mr-1"></i>
              View Cart &nbsp;
              <span className="badge badge-secondary cart-badge">{this.context.cart.length}
              </span>
            </Link>
           </form>
           <div className="social">
                 <a     className="social-icon  " href="/"> <i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a    className="social-icon social-icon-t" href="/"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                  <a    className="social-icon social-icon-i" href="/"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a    className="social-icon social-icon-y" href="/"> <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>

          </div>
        </div>
      </nav>
      </div>
      
      
    );

    }

    }

 
export default NavBar;