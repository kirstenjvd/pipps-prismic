import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

import Science from "../images/BCEPPI_Icon_Science.svg"
import Convening from "../images/BCEPPI_Icon_Convening.svg"
import Engaging from "../images/BCEPPI_Icon_Engaging.svg"

export const Functions = ({ slice }) => {
  return (
    <section className="Faculty" id="Functions">
      <div className="Container">
        <div className="functions">
          <h2 className="functions___header">{slice.primary.header}</h2>
          <div className="flex j-even f-wrap">
            <div className="flex-col w-3" >
              <div className="logo-wrap">
                <img src={Science} alt="" id="icon"/>
              </div>
              <h3>{slice.primary.function_header_1}</h3>
              <p>{slice.primary.function_description_1}</p>  
            </div>
            <div className="flex-col w-3" >
              <div className="logo-wrap">
                <img src={Convening} alt="" id="icon"/>
              </div>
              <h3>{slice.primary.function_header_2}</h3>
              <p>{slice.primary.function_description_2}</p>  
            </div>
            <div className="flex-col w-3" >
              <div className="logo-wrap">
                <img src={Engaging} alt="" id="icon"/>
              </div>
              <h3>{slice.primary.function_header_3}</h3>
              <p>{slice.primary.function_description_3}</p>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyFunctions on PrismicHomepageDataBodyFunctions {
    id
    primary {
      header
      function_header_1
      function_description_1
      function_header_2
      function_description_2
      function_header_3
      function_description_3
    }
  }
`
