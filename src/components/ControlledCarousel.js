import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "react-bootstrap/Carousel"

 export default function ControlledCarousel() {

    const data = useStaticQuery(graphql` 
        query carouselsQuery {
            carousels: allSanityCarousels(sort: {fields: sequence}) {
                nodes {
                    id
                    sequence
                    image {
                    asset {
                        gatsbyImageData(                            width: 500,
                        fit: FILL,
                        layout: CONSTRAINED,
                        placeholder: BLURRED,
                        formats: [AUTO, WEBP]          
                            )
                        }
                    }
                }
            }
        
        }
    
    `)

    const [index, setIndex] = useState(0)
    const slides = data.carousels.nodes
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
    
    



    
   
    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {slides.map(slide => (
             <Carousel.Item key={slide.id} selectedIndex={slide.sequence}> 

            <GatsbyImage image={slide.image.asset.gatsbyImageData} alt="Carousel Slider with Brand Logos" />
        </Carousel.Item>
          ))}
        </Carousel>
      </>
    )
}