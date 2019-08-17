import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../../styles/normalize.css"

import layoutStyles from "./Layout.module.scss"

const Layout = function(props) {
  return (
    <div className={layoutStyles.global}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer className={layoutStyles.footer} />
      </div>
    </div>
  )
}

export default Layout
