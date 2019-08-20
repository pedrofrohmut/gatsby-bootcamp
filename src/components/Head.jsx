import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title: siteTitle } = data.site.siteMetadata
  return <Helmet title={`${title} | ${siteTitle}`} />
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
