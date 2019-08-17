import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./Header.module.scss"

const Header = function(props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
