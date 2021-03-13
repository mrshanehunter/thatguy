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
  height: 17.5rem;
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

export default function QuestionSet1() {




return (
  <Carousel defaultWait={3950} maxTurns={100}>
    <Slide left>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `transparent`}}> 
      <p style={{color: `#d9d9d9`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>Have you been left frustrated at the lack of uplift achieved by a campaign that required a serious investment? </p>
      </div>
    </Slide>

    <Slide right>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `transparent`}}> 
    <p style={{color: `#8abdde`, fontFamily: `montserrat`, fontSize: `1.6rem`, padding: `2rem`}}>
        Had the lack lustre results explained away by "the visibility wasn't there", or "just not enough eyeballs"?
      </p> 
      </div>
    </Slide>
  </Carousel>
);
}
