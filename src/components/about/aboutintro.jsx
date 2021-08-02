import React, { Component } from 'react';
import "./about.css"



class AboutIntro extends Component {
    state = {  }
    render() { 

        return ( 
            <div className="about-intro">
          <div>
            <img className="about-img" src="/images/RecordingArtist2.jpg" alt="bg.jpg"  />
            </div>
            
            
        <div className="index-card" >
             <h1 className="ait"><span className="tspan"> About Us.. </span></h1>
           <p className="aic"> winning mixer John Smith.Voicer Recording  Studio has three fully equipped studios, with a spacious</p> 
           <p className="aic"> tracking room, iso rooms, and a world class blend of state of the art and vintage gear.Our</p>  
           <p className="aic">dedicated staff of engineers offers recording, mixing, mastering, post-production, ISDN,</p> 
           <p className="aic">  transfers, mobile recording, live sound, video production, and even small scale cd-manufacturing</p>
           <p className="aic"> with print.Our studios are equipped to handle your project from beginning to end. We have top </p> 
           <p className="aic">notch  trained musicians at our fingertips, so if your music is lacking that extra edge, we can maximize sound to the fullest.</p>
        </div>
        

        </div>
         );
    }
}
 
export default AboutIntro;