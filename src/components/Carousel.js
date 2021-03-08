import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
                            fluid(maxWidth: 500) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }

    
    `)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    const slides = data.carousels.nodes
    console.log(slides)
    return (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
         {slides.map((slide) => (   
        <Carousel.Item key={slide.id}> 
            <Img fluid={slide.image.asset.fluid} className="d-block w-100" src={slide.image.asset.fluid} alt="Carousel Slider with Brand Logos" />
        </Carousel.Item>
     ))}
        </Carousel>
        </>
    )
}