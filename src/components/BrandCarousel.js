import React, { useState } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "react-bootstrap/Carousel"

 function CarouselItem({ slide }) {

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

    
    
    return (
        <>
      
         
            
        <Carousel.Item key={slide.id}> 

            <GatsbyImage image={slide.image.asset.gatsbyImageData} alt="Carousel Slider with Brand Logos" />
        </Carousel.Item>
    
        </>
    )

}

export default function BrandCarousel({ slides }) {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
    console.log(slides)
    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {slides.map(slide => (
            <CarouselItem key={slide.id} slide={slide} />
          ))}
        </Carousel>
      </>
    )
}