import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"



const width = '28rem', height='17.5rem';



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

export default function DefinitionsCarousel() {




return (
  <Carousel defaultWait={3500} maxTurns={10000}>
    <Slide bottom>
      <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#0f4c81`}}>
        <h1 style={{color: `#8abdde`, fontFamily: `timberline`, fontWeight: `500`, fontStyle: `normal`, fontSize: `4rem`}}>Visibility</h1>
      </div>
    </Slide>
    <Slide top>
    <div className="w-100 d-flex-column text-center" style={{height: `100%`, background: `#d9d9d9`, padding: `3rem 5rem`}}>
        <h2 style={{color: `#080424`, fontFamily: `timberline`, fontSize: `1.8rem`, letterSpacing: `0.15rem`}}>noun:</h2>
        <p style={{color: `080424`, fontFamily: `montserrat`, fontSize: `1.4rem`}}>the degree to which something has attracted general attention; prominence</p>
      </div>
    </Slide>
    <Slide left>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#0f4c81`}}>
    <h1 style={{color: `#8abdde`, fontFamily: `timberline`, fontWeight: `500`, fontStyle: `normal`, fontSize: `4rem`}}>Value</h1>
      </div>
    </Slide>
    <Slide right>
    <div className="w-100 d-flex-column text-center" style={{height: `100%`, background: `#d9d9d9`, padding: `4rem 5rem`}}>
    <h2 style={{color: `#080424`, fontFamily: `timberline`, fontSize: `1.8rem`, letterSpacing: `0.15rem`}}>noun:</h2>
    <p style={{color: `080424`, fontFamily: `montserrat`, fontSize: `1.4rem`}}>the importance, worth, or usefulness of something</p>
      </div>
    </Slide>
    <Slide top>
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: `100%`, background: `#0f4c81`}}>
    <h1 style={{color: `#8abdde`, fontFamily: `timberline`, fontWeight: `500`, fontStyle: `normal`, fontSize: `4rem`}}>Context</h1>
      </div>
    </Slide>
    <Slide bottom>
    <div className="w-100 d-flex-column text-center" style={{height: `100%`, background: `#d9d9d9`, padding: `2rem`}}>
    <h2 style={{color: `#080424`, fontFamily: `timberline`, fontSize: `1.8rem`, letterSpacing: `0.15rem`}}>noun:</h2>
        <p style={{color: `080424`, fontFamily: `montserrat`, fontSize: `1.4rem`}}>the circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood</p>
      </div>
    </Slide>
  </Carousel>
);
}
