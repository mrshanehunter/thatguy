import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Img from "gatsby-image";
import styled from "styled-components";


const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    
  }
  @media (min-width: 1024px) {
    display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-auto-rows: auto; 
  }
`;

export const ServiceStyleFront = styled.div` 
  width: 25rem;
  height: 25rem;
  display: grid;
  grid-template-rows: 25rem;
  grid-template-columns: 25rem;
  background: var(--gray);
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  justify-content: center;
  padding: 0;
  margin: 0;
  .gatsby-image-wrapper {
    padding: 0.15rem;
    margin: 0.15rem;
    filter: grayscale(1);
    &:hover{
      filter: grayscale(0);
    }
  }
`;

export const ServiceStyleBack = styled.div` 
  width: 25rem;
  height: 25rem;
  display: grid;
  grid-template-rows: 25rem;
  grid-template-columns: 25rem;
  border: 1px solid var(--accent);
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
`;

export const ServiceListBack = styled.div`
  width: 25rem;
  height: 25rem;
  padding: 0.75rem;
  display: subgrid;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 1fr;
  color: var(--base);
`;

function ProjectItem({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vetical">
      <>
      <ServiceStyleFront>
      <button
           className="w-100 flipBtnF" type="button" onClick={handleClick}>
        <Img 
        fluid={project.image.asset.fluid}
        alt={project.client} />
       
        </button>
      </ServiceStyleFront>
      </>
      <>
      <ServiceStyleBack>
      <button className="w-100 flipBtnB" type="button" onClick={handleClick}>
      <ServiceListBack>
        <div className="d-flex-row text-left">
         <h5 style={{textAlign: `left`, marginBottom: `0.25rem`, fontFamily: 'timberline', color: `#1976a5`, fontSize: `2rem`}}>
           <span>{project.client}</span>
         </h5>
         <h6 style={{textAlign: `left`, marginBottom: `0`, fontFamily: 'futura', color: `#8abdde`}}>
           <span> {project.industry}</span>
         </h6>
         <hr style={{background: `#d9d9d9`, maxWidth: `75%`, marginRight: `25%`}}/>
          <h6 style={{textAlign: `left`, marginTop: `0.25rem`, fontFamily: 'futura', textTransform: `uppercase`, color: `#8abdde`}}>
            Services Provided:
          </h6>
        </div>
        <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr`, gridAutoRows: `auto`, gridGap: `0.25rem` }}>
          <div style={{textAlign: `left`}} className="serviceP">
            <p>{project.service1}</p>
            <p>{project.service2}</p>
            <p>{project.service3}</p>
            <p>{project.service4}</p>
            <p>{project.service5}</p>
            <p>{project.service6}</p>
          </div>
          <div style={{textAlign: `left`}} className="serviceP">
            <p>{project.service7}</p>
            <p>{project.service8}</p>
            <p>{project.service9}</p>
            <p>{project.service10}</p>
            <p>{project.service11}</p>
            <p>{project.service12}</p>
          </div>
        </div>
        </ServiceListBack>
      </button>
      </ServiceStyleBack>
      </>
    </ReactCardFlip>
  )
}

export default function Projects({ projects }) {
  return (
    <>   
          <ProjectsGrid>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ProjectsGrid>
    </>
  )
}