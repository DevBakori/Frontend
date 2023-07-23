import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.webp";
import img5 from "../images/5.webp";
import img6 from "../images/6.jpeg";
import img7 from "../images/7.jpeg";
import img8 from "../images/8.jpeg";
import img9 from "../images/9.webp";
import img10 from "../images/10.webp";
import img11 from "../images/11.jpeg";
import img12 from "../images/12.jpeg";



export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-fluid slider2">
        <h3> Responsive </h3>
        <Slider {...settings}>
          <div>
            <img src={img1 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img2 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img3 } alt="#" title="dry" className="slider-image"/>  
          </div>
          <div>
            <img src={img4 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img5 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img6 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img7 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img8 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img9 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img10 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img11 } alt="#" title="dry" className="slider-image"/>
          </div>
          <div>
            <img src={img12 } alt="#" title="dry" className="slider-image"/>
          </div> 
        </Slider>
      </div>
    );
  }
}