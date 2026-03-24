
import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import assessly from '../images/assessly.png'
import kingsmeal from '../images/kingsmeal.png'
import piggyvest from '../images/piggyvest.png'
import devcareer from '../images/devcareer.png'
import metabnb from '../images/metabnb.png'
import reactmovie from '../images/Reactmovie.png'
import gallery from '../images/gallery.png'

let data = [
  {
    img: assessly,
    disc: "Assessly is an AI modern web platform that helps students practice and prepare for exams through structured, interactive assessments.",
    demo: "https://assessly-one.vercel.app/",
    stacks: " Next.js, Tailwind and Supabase"
  },
  {

    img: devcareer,
    disc: "Devcareer Blog is an almost cooked blog website of the popular Non profit Organization Devcareers",
    demo: "https://testblogdev.netlify.app",
    stacks : " React and Styled Component"
  },
  {
    img: piggyvest,
    disc: "Piggyvest is a direct clone of the popular piggyvest Bank",
    demo: "https://piggyvest-bella.netlify.app",
    stacks : " React, Css Module and Sass"
  },
  {
    img: kingsmeal,
    disc: "KingsMeal is a Resturant web application comprising of the Order, Cart and the Checkout page.  ",
    demo: "https://kingsmeal.netlify.app",
    stacks : " React and Tailwind"
  },
  {
    img: metabnb,
    disc: "Metabnb is a dummy two pages hotel websites which uses nft for transactions ",
    demo: "https://metabnbnft.netlify.app",
    stacks : " React and Css"
  },

  
  {
    img: gallery,
    disc: "This an online gallery app that allows a user to rearrange picures",
    demo: "https://hng-x3galleryapp.netlify.app",
    stacks : " React and Css "
  },

  {
    img: reactmovie,
    disc: "Wakallery is a web website that retrives infomation and trailer images of movies from the popular IMDB api ",
    demo: "https://hngx-2movieapp.netlify.app",
     stacks : " React and Css "
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