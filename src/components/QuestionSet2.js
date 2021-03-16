import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 28rem;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 68rem;
  }
`;
const Children  = styled.div`
  width: 28rem;
  position: relative;
  height: 13rem;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 68rem;
  }
`;



const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
     
    </Children>
    
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

export default function QuestionSet2() {




return (
  <Carousel defaultWait={2150} maxTurns={10000}>
    <Slide left>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#0f4c81`}}> 
      <p style={{color: `#d9d9d9`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>Have you ever launched a website for your brand, with high expectations of streams of traffic? </p>
      </div>
    </Slide>

    <Slide bottom>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#d9d9d9`}}> 
    <p style={{color: `#0f4c81`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>      
      But all you got was a trickle? 
      </p>
      </div>
    </Slide>
  
   
   <Slide top>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#223275`}}> 
      <p style={{color: `#8abdde`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>How about the forecast metrics? Anticpate low bounce and high conversion? </p>
      </div>
    </Slide>

    <Slide right>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#8abdde`}}> 
    <p style={{color: `#223275`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>But got high bounce and low conversion?</p>
      </div>
    </Slide>
  </Carousel>
);
}
