import React, { Component } from "react";
// import AboutIntro from "./aboutintro";
import "./about.css"



class About extends Component {
  state = {};
  render() {
    return (
    <div className="about-page">

              
              {/* <span className="RandomAbout">Picture...</span> */}

        <div className="about-intro">
          <div className="about-img-container">
            <img className="about-img" src="/images/RecordingArtist2.jpg" alt="bg.jpg"  />
            <div><h3 className="Tittle-photo">MEET THE Familia...</h3></div>
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


                {/* photo Card */}
                <div><h3 className="Tittle-photo">MEET THE CREW...</h3></div>
                
                <div className="photo-container">
        <div className="Photo-cards">

          <div className="photoimg">
            <img className='photoimg2' src="/images/tm7.jpg" alt="" />
          </div>

          <div className="photoT">
             
            <h4> VICK<br/>
            Manager
            </h4>
           </div>
         

        </div>
        <div className="Photo-cards">

          <div className="photoimg">
            <img className='photoimg2' src="/images/tm2.jpg" alt="" />
          </div>

          <div className="photoT">
          <h4> ANHK<br/>
            Mixing/Mastering
            </h4>
           </div>
         

        </div>
        <div className="Photo-cards">

          <div className="photoimg">
            <img className='photoimg2' src="/images/tm3.jpg" alt="" />
          </div>

          <div className="photoT">
          <h4> Marcus <br/>
            Recording
            </h4>
           </div>
         

        </div>

        <div className="Photo-cards">

          <div className="photoimg">
            <img className='photoimg2' src="/images/tm6.jpg" alt="" />
          </div>

          <div className="photoT">
          <h4> Kenny<br/>
            Photograpy
            </h4>
           </div>
        </div>
        <div className="Photo-cards">

          <div className="photoimg">
            <img className='photoimg2' src="/images/tm4.jpg" alt="" />
          </div>

          <div className="photoT">
          <h4> OSHUN  <br/>
            Co-Owner
            </h4>
           </div>
        </div>

        <div className="Photo-cards">

          <div className="photoimg">
            <img className='photoimg2' src="/images/owner.jpg" alt="" />
          </div>

          <div className="photoT">
          <h4> FAITH <br/>
            Co-Owner
            </h4>
           </div>

           </div>
         

        </div>

                   {/* CARDS ONE */}
         <div  className="test-Title"> Testimonies...  </div>
         <div className="TeamCard">
        <div className="card">
        <div className="img">
			<img className="imgabout2" src="/images/tm1.jpg" alt=""/>
            </div>
		<div className="content">
			<h2>title</h2>
			<p className="card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
			
		
	    </div>
        </div>
        <div className="card">
        <div className="img">
			<img className="imgabout2" src="/images/christyle.jpg" alt=""/>
            </div>
		<div className="content">
			<h2>title</h2>
			<p className="card-p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
			
		
	    </div>
        </div>
        <div className="card">
        <div className="img">
			<img className="imgabout2" src="/images/tm2.jpg" alt=""/>
            </div>
		<div className="content">
			<h2>title</h2>
			<p className="card-p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
			
		
	    </div>
        </div>

        </div>

         
         
         
         

        </div>
    

          
         
          
          
          
         
          
        
    
    
    );
  }
}

export default About;
