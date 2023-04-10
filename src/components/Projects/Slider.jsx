import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import kingsmeal from '../images/kingsmeal.png'
import piggyvest from '../images/piggyvest.png'
import devcareer from '../images/devcareer.png'
import metabnb from '../images/metabnb.png'
import movie from '../images/movie.png'

let data = [
  {

    img: devcareer,
    disc: "Devcareer Blog is an almost cooked blog website of the popular Non profit Organization Devcareers built with React tailwind and style component",
    demo: "https://testblogdev.netlify.app"
  },
  {
    img: piggyvest,
    disc: "Piggyvest is a direct clone of the popular piggyvest bank bulit with React and Css Module",
    demo: "https://piggyvest-bella.netlify.app"
  },
  {
    img: kingsmeal,
    disc: "KingsMeal is a Resturant web application biult with react and Tailwind comprising of the Order, Cart and the Checkout page.  ",
    demo: "https://kingsmeal.netlify.app"
  },
  {
    img: metabnb,
    disc: "Metabnb is a dummy two pages hotel websites which uses nft for transactions ",
    demo: "https://metabnbnft.netlify.app"
  },
  {
    img: movie,
    disc: "Movielist is a two pages website that retrives infomation and trailer clips of movies from an api ",
    demo: "https://l4d-q-movie-app.netlify.app"
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`