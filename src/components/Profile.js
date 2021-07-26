import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
    font-family: "montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    color: var(--classic);
    font-size: 1.2rem;    
    }
`;

const StyledImageContainer = styled.div`
  .gatsby-image-wrapper {
    margin-bottom: 2rem;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    .textWrap {
      width: 17.5rem;
      height: 17.5rem;
      float: left;
      shape-outside: circle();
      margin: 0 1.5rem 1.5rem 0;
    }
  }

  @media (min-width: 768px) {
    .gatsby-image-wrapper {
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

function ProfileDetails({ profile }) {
  
    return (
      <StyledContainer>
        <p>{profile.para1}</p>
        <br />

        <p> {profile.para2}</p>
        <br />
        <p> {profile.para3}</p>
        <br />
        <p> {profile.para4}</p>
        <br />
        <StyledImageContainer>
          <GatsbyImage
            image = {profile.image.asset.gatsbyImageData}
            
             className="textWrap"
            // style={{
            //   height: `17.5rem`,
            //   width: `17.5rem`,
            //   borderRadius: `50%`,
            //   border: `0.25rem solid var(--highlight)`,
            // }}
            alt="Image of That Guy From Marketing"
          />
          <p>{profile.para5}</p>
        </StyledImageContainer>

        <h6>* a Unilever lesson that has not been discarded</h6>
      </StyledContainer>
    )
}



export default function Profile({ profiles }) {
    return (
        <>
        {profiles.map((profile) => (
            <ProfileDetails key={profile.id} profile={profile} />
        ))}
    </>
    )
}