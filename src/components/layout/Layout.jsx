import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../../styles/my-global-styles.css"

import layoutStyles from "./Layout.module.scss"

const Layout = ({ children }) => (
  <div className={layoutStyles.global}>
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
    </div>
    <Footer className={layoutStyles.footer} />
  </div>
)

export default Layout
