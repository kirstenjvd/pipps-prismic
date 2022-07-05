import React, {useState} from 'react'
import { graphql } from 'gatsby'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Directors = ({ slice }) => {
  function readMore(bio){
    var [showMore, setShowMore] = useState(false);
    return(
      <>
       <div className={showMore? "expanded" : "short"}>
          <PrismicRichText field={bio.richText}/>
        </div>
        <a onClick={() => setShowMore(!showMore)} className="readMore">{showMore ? "Read Less" : "Read More"}</a>
      </>
    )
  }
  return (
    <section className="Faculty" id="Directors">
      <div className="Container">
        <h2>Scienific Co-Directors</h2>
        <div className="directors flex f-wrap j-btwn">
          {slice.items.map((item,index) => (  
            <div className="w-5 flex-col j-btwn" key={`director-${index}`}>
              <div className="img-wrap">
                <GatsbyImage
                  image={item.image?.gatsbyImageData}
                  alt={item.image?.alt || ""}
                  layout="constrained"
                  quality={100}
                />
              </div>
              <div className="bio grey-border">
                <h3>{item.name}</h3>
                <div className="contact">
                  <PrismicLink href={`https://twitter.com/${item.twitter_name}`}><p className="twitter">{item.twitter_name}</p></PrismicLink>
                  <PrismicLink href={`mailto:${item.email}`}><p className="email">{item.email}</p></PrismicLink>
                </div>
                <h4>BIO</h4>
                {item.bio_copy?.text?.length > 10 ? readMore(item.bio_copy) : null}
              </div>
              <div className="publications">
                <h4>PUBLICATIONS</h4>
                <PrismicRichText field={item.publications?.richText}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyDirectors on PrismicHomepageDataBodyDirectors {
    id
    primary {
      header
    }
    items {
      image {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
        alt 
      }
      name 
      twitter_name
      email
      bio_copy {
        richText
        text 
      }
      publications {
        richText 
      }
    }
  }
`
