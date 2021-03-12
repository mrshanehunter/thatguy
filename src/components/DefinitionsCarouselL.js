import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"



const width = '20rem', height='17.5rem';



const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;



const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
     
    </Children>
    
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

export default function DefinitionsCarouselL() {




return (
  <Carousel defaultWait={4500} maxTurns={100}>
    <Slide left>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#223275`}}>
        
      </div>
    </Slide>
    <Slide right>
    <div className="w-100 d-flex-column text-center" style={{height: `100%`, background: `#8abdde`, padding: `3rem 5rem`}}>
        
      </div>
    </Slide>
    <Slide bottom>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#223275`}}>
    
      </div>
    </Slide>
    <Slide top>
    <div className="w-100 d-flex-column text-center" style={{height: `100%`, background: `#8abdde`, padding: `4rem 5rem`}}>
    
      </div>
    </Slide>
    <Slide right>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#223275`}}>
    
      </div>
    </Slide>
    <Slide left>
    <div className="w-100 d-flex-column text-center" style={{height: `100%`, background: `#8abdde`}}>
   
      </div>
    </Slide>
  </Carousel>
);
}
