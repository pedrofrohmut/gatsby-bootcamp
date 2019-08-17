import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = function(props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={props.className}>
      <p>Created by {data.site.siteMetadata.author}. &copy; 2019</p>
    </footer>
  )
}

export default Footer
