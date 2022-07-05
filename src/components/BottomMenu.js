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
          <img src={Logo} alt="PIPPS Logo" className="logo"/>
          <div className="contact flex j-btwn">
            <a className="nav_twitter t-white" target="_blank" rel="noopener noreferrer" href="https://twitter.com/bc_eppi?s=20&t=ws5BLFxlpmAe2r-qr25bkg">@PIPPS</a>
            <a className="nav_email t-white" target="_blank" rel="noopener noreferrer" href="mailto:PIPPS@SFU.CA">PIPPS@SFU.CA</a>
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
  }
`
