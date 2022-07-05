import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import Cog1 from "../images/BG Cog.svg"
import Cog2 from "../images/BG Cog 2.svg"

export const Resources = ({ slice }) => {
  return (
    <section className="Affiliation" id="resources">
      <div className="Container">
        <div className="w-10 resources">
          <h2>{slice.primary.header}</h2>
          <h2>{slice.primary.header_2}</h2>
          <ul>
            {slice.items.map((item,index) => (
              <li key={index}>
                <PrismicRichText 
                  field={item.article?.richText}
                  
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg cog-1">
        <img src={Cog1} alt=""/>
      </div>
      <div className="bg cog-2">
        <img src={Cog2} alt=""/>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyResources on PrismicHomepageDataBodyResources {
    id
    primary {
      header 
      header_2
    }
    items {
      article {
        richText
      }
    }
  }
`