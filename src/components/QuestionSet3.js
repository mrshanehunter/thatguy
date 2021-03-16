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

export default function QuestionSet3() {




return (
  <Carousel defaultWait={2120} maxTurns={10000}>
    <Slide top>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `transparent`}}> 
      <p style={{color: `#8abdde`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>Developed a killer tag line for your brand that articlulates your positioning perfectly? </p>
      </div>
    </Slide>

    <Slide right>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#8abdde`}}> 
    <p style={{color: `#0f4c81`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>But still get customers questioning your offering? Or worse, switching to a competitor? </p>
    </div>
    </Slide>
  
   
   <Slide left>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `transparent`}}> 
      <p style={{color: `#8abdde`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>Invested in new branded assets and marketing collateral to show off your new identity after a re-brand? </p>
      </div>
    </Slide>

    <Slide bottom>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#0f4c81`}}> 
    <p style={{color: `#d9d9d9`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>Only to find that the colour combination or logo design is anathema to your most desirable target?
    </p>
      </div>
    </Slide>
  </Carousel>
);
}
