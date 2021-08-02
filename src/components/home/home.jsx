import React, { Component } from 'react';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';




class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <Carousel className="carousel-container" >
  <Carousel.Item   >
    <img
      className="d-block  w-100"
      src="/images/RecordingArtist2.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="caption-c">
      <h3>First slide label</h3>
      <p className="cp">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/RecordingArtist2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="caption-c">
      <h3>Second slide label</h3>
      <p className="cp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/RecordingArtist2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="caption-c">
      <h3>Third slide label</h3>
      <p className="cp">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<table  className="playlist"   striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Artist</th>
      <th>Title</th>
      <th>SONG</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Spirtual Tony</td>
      <td>Manifested You</td>
      
    </tr>
    <tr>
     
      <td>Spirtual Tony</td>
      <td>Free Sprit </td>
      <td></td>
    </tr>
    <tr>
      
      <td>Spirtual Tony</td>
      <td>Past Life</td>
    </tr>
  </tbody>
</table>






</div>
            

            

        
        );
    }
}
 
export default Home;