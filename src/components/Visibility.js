import React, {useState, useEffect} from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Zoom from "react-reveal/Zoom"
import Shake from "react-reveal/Shake"
import Fade from "react-reveal/Fade"


export default function Visibility(props) {
  const [opacity, setOpacity] = useState(0)
  const opac = {opacity}

  useEffect(() => {
    if (props.props.mount) {
     setTimeout((setOpacity(1)),1000)
    }
  }, [props.props.mount])


return(
  <div style={opac}>
    <Fade ssrFadeout="true" delay={1000} duration={1000} >
      <div className="w-75 p-2 mx-auto visibility">
        <AniLink paintDrip to="/home/" hex="#8abdde" duration={0.5}>
          <Zoom duration={2000}>
            <h1 className="text-center">
              Visibility has no value without{" "}
              <Fade delay={2500} duration={1000} >
              <Shake delay={3500}>context</Shake>
              </Fade>
            </h1>
          </Zoom>
        </AniLink>
      </div>
      </Fade>
      </div>

)
}
     