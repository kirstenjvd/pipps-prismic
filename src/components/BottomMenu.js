import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import Logo from "../images/Logo Footer.svg"


export const BottomMenu = ({ bottomMenu}) => {
  return (
    <footer>
      <div className="Container">
        <div className="wrap flex j-btwn a-cntr f-wrap">
          <img src={bottomMenu.logo?.url} alt="PIPPS Logo" className="logo"/>
          <div className="contact flex j-btwn">
            {bottomMenu.twitter && 
              <a className="nav_twitter t-white" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${bottomMenu.twitter}`} tabIndex="0">{bottomMenu.twitter}</a>
            }
              <a className="nav_email t-white" href={`mailto:${bottomMenu.email}`} target="_blank" rel="noopener noreferrer" tabIndex="0">{bottomMenu.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const query = graphql`
  fragment BottomMenuFragment on PrismicBottomMenu {
    _previewable
    type
    lang
    data {
      email
      twitter
      logo {
        url
      }
    }
  }
`
