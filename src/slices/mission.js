import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Mission = ({ slice }) => {
  return (
    <section className="Mission Alt">
      <div className="Container">
        <div className="wrap">
          {slice.items.map((item,index) => (
            <div className="copy flex j-btwn f-wrap" key={`mission-${index}`}>
              <div className="w-2">
                <h2>{item.header}</h2>
              </div>
              <div className="w-8">
                <PrismicRichText field={item.content?.richText}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyMission on PrismicHomepageDataBodyMission {
    id
    items {
      header
      content {
        richText
      }
    }
  }
`