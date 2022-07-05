import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Framework = ({ slice }) => {
  return (
    <section className="Framework Alt">
      <div className="Container">
        <div className="wrap flex j-btwn f-wrap">
          <div className="w-2">
            <h2>{slice.primary.header}</h2>
          </div>
          <div className="w-8">
            <PrismicRichText field={slice.primary.framework_content?.richText}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyFramework on PrismicHomepageDataBodyFramework {
    id
    primary {
      header 
      framework_content {
        richText
      }
    }
  }
`
