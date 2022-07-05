import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Affiliations = ({ slice }) => {
  return (
    <section className="Affiliation" id="Affiliations">
      <div className="Container">
        <h2 className="topHeader">{slice.primary.header}</h2>
        <div className="projects flex j-btwn grey-border f-wrap">
          {slice.items.map((item,index) => (
            <div className="projects___item flex-col w-3" key={`affiliations-${index}`}>
              <div className="img-wrap">
                <GatsbyImage
                  image={item.project_image?.gatsbyImageData}
                  alt={item.project_image?.alt || ""}
                  layout="constrained"  
                />
              </div>
              <div className="copy"><PrismicRichText field={item.content?.richText}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyAffiliations on PrismicHomepageDataBodyAffiliations {
    id
    primary {
      header
    }
    items {
      project_image {
        gatsbyImageData 
        alt 
      }
      content {
        richText
      }
    }
  }
`