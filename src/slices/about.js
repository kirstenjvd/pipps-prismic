import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import AboutImg from "../images/About 1.png"

export const About = ({ slice }) => {
  return (
    <section className="About" id="About">
      <div className="Container">
        <div className="wrap w-10">
          <h2>{slice.primary.header}</h2>
          <PrismicRichText field={slice.primary.about_copy?.richText}/>
        </div>
      </div>
      <div className="img-wrap">
        <img src={AboutImg} alt="" className="image" loading="lazy"/>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyAbout on PrismicHomepageDataBodyAbout {
    id
    primary {
      header 
      about_copy {
        richText
      }
    }
  }
`
