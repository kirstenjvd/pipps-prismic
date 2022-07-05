import React, {useState} from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import ReactReadMoreReadLess from "react-read-more-read-less";

export const Team = ({ slice }) => {
  function readMore(bio){
    var [showMore, setShowMore] = useState(false);
    return(
      <>
       <div className={showMore? "team___bio expanded" : "team___bio short"}>
          <PrismicRichText field={bio.richText}/>
        </div>
        <a onClick={() => setShowMore(!showMore)} className="readMore">{showMore ? "Read Less" : "Read More"}</a>
      </>
    )
  }
  
  return (
    <section className="Faculty" id="Team">
      <div className="Container">
        <h2>{slice.primary.header}</h2>
        <div className="team flex f-wrap j-btwn ">
          {slice.items.map((item,index) => (
            <div className="member flex-col" key={`team-${index}`}>
              <div className="img-wrap">
                <GatsbyImage
                  image={item.image?.gatsbyImageData}
                  alt={item.image?.alt || ""}
                  layout="constrained"
                  quality={100}  
                />
              </div>
              <h3 className="team___name">{item.name}</h3>
                <p className="team___position">{item.position}</p>
                {item.bio?.text?.length > 80 ? readMore(item.bio) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyTeam on PrismicHomepageDataBodyTeam {
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
      position 
      bio {
        richText
        text
      }
    }
  }
`
