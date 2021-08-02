import React, { Component } from 'react';

import "./footer.css"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <footer className="footer-page">
                    <div className="title-container">
                <h1>
                   Footer...
                    </h1>
                    
                </div>
                    <div className="footer-container" >
                        

                <div className="stick-note-v">
                 <h5 className="footer-t-v"><i class="fad fa-thumbtack"></i>Voice Recording</h5>
                 <p className="footer-p"> <i class="fa fa-address-card" aria-hidden="true"></i> Address: 1035 N Gilmore
                     Avenue Colorado Springs,<br></br> C0 80915 </p>    
                </div>

                <div className="stick-note" >
                    <h5 className="footer-t-c">Conact Number</h5>
                    <p className="footer-p"><i class="fa fa-phone" aria-hidden="true"></i>Phone:719-365-4321<br></br>
                    <i class="fa fa-fax" aria-hidden="true"></i>Fax:719-765-4323 </p> 
                </div>
            
              

                <div className="footer-h">
                    <h5 className="footer-t-w">Working Hours</h5> 
                    <p className="footer-p"><i class="fa fa-clock-o" aria-hidden="true"></i>
                       Mon-Fri: 9:00 am - 5:00 pm <br></br>
                       Sat-Sun: 11:00 am - 3:00 pm
                    </p>  
                </div>

                </div>
                <div className="social"> 
                           
                 <a className="social-icon-f" href="/"> <i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a className="social-icon-t" href="/"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                  <a className="social-icon-i" href="/"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a className="social-icon-y" href="/"> <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
                <div>  

                    <p className="copyright">© 2021 Music Sync Recording Studio. All Rights Reserved to <span className="me">JP Development </span> .</p>
                </div>
              

             

                </footer>
             </div>
         );
    }
}
 
export default Footer;