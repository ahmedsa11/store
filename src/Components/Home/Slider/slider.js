import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images//slider1.png";
import img2 from "../../../images/slider4.png";
import Slide from 'react-reveal/Slide';
import "./slider.css";
function Slider() {
  const [index,setIndex]=useState()
  const handleSelect=(selectedIndex)=>{
    setIndex(selectedIndex)
  } 
  return (
    <>
      <Carousel activeIndex={index} onSelect={()=>handleSelect(index)} className="slider" interval={2000}>
        <Carousel.Item>
          <img className="d-block" src={img1} alt="First slide" />
          <Carousel.Caption>
            <div className="slider-caption">
            <Slide right>
              <h3>هناك خصم كبير </h3>
              </Slide>
              <Slide right>
              <p>خصم يصل الي 50% عند شرائك</p>
              </Slide>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img2} alt="Second slide" />
          <Carousel.Caption>
          <div className="slider-caption">
            <Slide right>
              <h3>هناك خصم كبير </h3>
              </Slide>
              <Slide right>
              <p>خصم يصل الي 50% عند شرائك</p>
              </Slide>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <div className="overlay"></div>
      </Carousel>
    </>
  );
}

export default Slider;
