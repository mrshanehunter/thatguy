import React, { useState } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "react-bootstrap/Carousel"

 function ControlledCarousel({ slide }) {

    // const data = useStaticQuery(graphql` 
    //     query carouselsQuery {
    //         carousels: allSanityCarousels(sort: {fields: sequence}) {
    //             nodes {
    //                 id
    //                 sequence
    //                 image {
    //                 asset {
    //                     gatsbyImageData(                            width: 500,
    //                     fit: FILL,
    //                     layout: CONSTRAINED,
    //                     placeholder: BLURRED,
    //                     formats: [AUTO, WEBP]          
    //                         )
    //                     }
    //                 }
    //             }
    //         }
        
    //     }
    
    // `)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    
    
    return (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
         
            
        <Carousel.Item key={slide.id}> 

            <GatsbyImage image={slide.image.asset.gatsbyImageData} className="d-block w-100" src={slide.image.asset} alt="Carousel Slider with Brand Logos" />
        </Carousel.Item>
    
        </Carousel>
        </>
    )

}

export default function BrandCarousel({ slides }) {
    return (
      <>
        {slides.map(slide => (
          <ControlledCarousel key={slide.id} slide={slide} />
        ))}
      </>
    )
}