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
    font-size: 1.6rem;
    }
`;

const StyledImageContainer = styled.div` 
    display: flex;
    flex-direction: row;
    p {
    
    }
    img {
        float: left;
        margin: 2rem;
        
    }     
`;



function ProfileDetails({ about }) {
    return (
        <StyledContainer>
           <p>{about.para1}</p>
          
           <StyledImageContainer>
              
           <p>{about.para3} 
           
          
            <Image {...about.image}
            width={500}
            height={500}
            style={{height: `20rem`, width: `20rem`, borderRadius: `50%`, border: `0.25rem solid var(--highlight)`}}
            alt="Image of That Guy From Marketing"
            />
            {about.para4}
            <br/>
            {about.para4}

           </p>
            </StyledImageContainer>
           
            
           
            <p>{about.para4}</p>
           
          
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