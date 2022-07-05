import React, {useEffect,useState} from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage } from 'gatsby-plugin-image'
import LogoTop from "../images/Logo.svg"
import LogoSticky from "../images/BCEPPI Logo.svg"
import LogoMobile from "../images/Logo Footer.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const TopMenu = ({ topMenu, activeDocMeta }) => {
  useEffect(() => {
      window.addEventListener('scroll', isSticky);
      return () => {
          window.removeEventListener('scroll', isSticky);
      };
  });
         
  const [logo, setLogo] = useState("LogoTop");
  const isSticky = (e) => {
      const scrollTop = window.scrollY;

      setLogo(scrollTop <= 90 ? "LogoTop" : "LogoSticky");
      
  };
  const hideLogo = {
    visible: {
      transform: "translateY(0)",
      transition: "all 0.5 linear"
    },
    hidden: {
      
      transition: "all 0.25s linear",
      transform: "translateY(-200%)"
    }
  }
  return (
    <header className="header-section"   >
      <div className="Container">
        <div className="wrap flex j-btwn a-cntr">
          <input id="menu-toggle" type="checkbox" tabIndex="0" />
          <AnchorLink href="#Hero" className="logo-wrap">
            <img src={LogoTop} alt="PIPPS Logo" className="logo top" style={logo==="LogoTop" ?  hideLogo.visible : hideLogo.hidden}/> 
            <img src={LogoSticky} alt="PIPPS Logo" className="logo sticky"style={logo==="LogoSticky" ?  hideLogo.visible : hideLogo.hidden}/>
            <img src={LogoMobile} className="logo mobile" alt="PIPPS Logo"/>
          </AnchorLink>
          
          
          
          <label className='menu-button-container' htmlFor="menu-toggle" >
            <div className='menu-button' ></div>
          </label>
          <nav className="menu">
            <div className="nav flex j-btwn">
              <AnchorLink href="#About" tabIndex="0">ABOUT</AnchorLink>
              <AnchorLink href="#Faculty" tabIndex="0">TEAM</AnchorLink>
              <AnchorLink href="#Affiliations" tabIndex="0">RESOURCES</AnchorLink>
            </div>
            <div className="contact flex j-btwn">
              <a className="nav_twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/bc_eppi?s=20&t=ws5BLFxlpmAe2r-qr25bkg" tabIndex="0">@PIPPS</a>
              <a className="nav_email" href="mailto:PIPPS@SFU.CA" target="_blank" rel="noopener noreferrer" tabIndex="0">PIPPS@SFU.CA</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export const query = graphql`
  fragment TopMenuFragment on PrismicTopMenu {
    _previewable
    type
    lang
  }
`
