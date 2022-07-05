import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { TopMenu } from './TopMenu'
import { BottomMenu } from './BottomMenu'

export const Layout = ({ children, topMenu, bottomMenu, activeDocMeta }) => {
  const queryData = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{queryData.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={queryData.site.siteMetadata.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@600&display=swap" rel="stylesheet"/> 
      </Helmet>
      <TopMenu topMenu={topMenu} activeDocMeta={activeDocMeta} />
      <main>{children}</main>
      <BottomMenu bottomMenu={bottomMenu}/>
    </>
  )
}
