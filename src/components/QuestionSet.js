import React from "react"
import Fade from "react-reveal/Fade"
import QuestionSet1 from "./QuestionSet1"
import QuestionSet2 from "./QuestionSet2"
import QuestionSet3 from "./QuestionSet3"

export default function DefinitionsCarousel3() {
    return (
        <>
        <Fade top delay={3450} duration={4100}>
            
        <QuestionSet1 />
        </Fade>    
        <Fade top delay={5870} duration={6950}>     
        <QuestionSet2 />
        </Fade>
        <Fade top delay={7200} duration={8100}>
        <QuestionSet3 />        
        </Fade>
        </>
    )
}
