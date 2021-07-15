import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"

const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    p {
    font-family: "montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    color: var(--gray);
    font-size: 1.4rem;
    }
    h6 {
    font-family: montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: var(--classic);
    font-size: 1.2rem;    
    }
`;

const StyledImageContainer = styled.div` 

  img {
      margin-bottom: 2rem;
  }  
  
  @media (min-width: 768px){
    img {
        margin-bottom: 0;
    }  
   .textWrap {
       width: 17.5rem;
       height: 17.5rem;
       float: left;
       shape-outside: circle();
       margin: 0 1.5rem 1.5rem 0;
   }
  }
`
;

function ProfileDetails({ about }) {
    return (
      <StyledContainer>
        <p>{about.para1}</p>
        <br />

        <p> {about.para2}</p>
        <br />
        <p> {about.para3}</p>
        <br />
        <p> {about.para4}</p>
        <br />
        <StyledImageContainer>
          <Image
            {...about.image}
            width={300}
            height={300}
            className="textWrap"
            style={{
              height: `17.5rem`,
              width: `17.5rem`,
              borderRadius: `50%`,
              border: `0.25rem solid var(--highlight)`,
            }}
            alt="Image of That Guy From Marketing"
          />
          <p>{about.para5}</p>
        </StyledImageContainer>

        <h6>* a Unilever lesson that has not been discarded</h6>
      </StyledContainer>
    )
}



export default function Profile({ abouts }) {
    return (
        <>
        {abouts.map((about) => (
            <ProfileDetails key={about.id} about={about} />
        ))}
    </>
    )
}