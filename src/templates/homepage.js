import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { components } from '../slices'
import HeroImg from "../images/Hero Img.png"

const HomepageTemplate = ({ data }) => {
  if (!data) return null

  const homepage = data.prismicHomepage || {}
  const topMenu = data.prismicTopMenu || {}
  const bottomMenu = data.prismicBottomMenu || {}

  const { lang, type, url } = homepage || {}
  const alternateLanguages = homepage.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout topMenu={topMenu.data} bottomMenu={bottomMenu.data} activeDocMeta={activeDoc}>
      <section className="Hero" id="Hero">
        <div className="Container">
          <div className="wrap w-6">
            <span className="h4">{homepage.data.subtitle}</span>
            <h1>{homepage.data.title}</h1>
            <PrismicRichText field={homepage.data.hero_copy?.richText}/>
          </div>
        </div>
      
        <div className="img-wrap">
          <img className="image" alt="" src={HeroImg}/>
        </div>
      </section>
      <div className="fold"/>
      <SliceZone slices={homepage.data.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query homepageQuery($lang: String) {
    prismicHomepage(lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        subtitle
        title 
        hero_copy {
          richText
        }
        body {
          ... on PrismicSliceType {
            id
            slice_type
            slice_label
          }
          ...HomepageDataBodyAbout
          ...HomepageDataBodyMission
          ...HomepageDataBodyDirectors
          ...HomepageDataBodyTeam
          ...HomepageDataBodyFunctions
          ...HomepageDataBodyFramework
          ...HomepageDataBodyAffiliations
          ...HomepageDataBodyResources
        }
      }
    }
    prismicTopMenu(lang: { eq: $lang }) {
      ...TopMenuFragment
    }
    prismicBottomMenu(lang: { eq: $lang }) {
      ...BottomMenuFragment
    }
  }
`

export default withPrismicPreview(HomepageTemplate)
