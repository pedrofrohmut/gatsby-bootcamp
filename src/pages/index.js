import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Head from "../components/Head"

const IndexPage = function () {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm PedroFrohmut, a full-stack developer living in Poá-SP</h2>
    </Layout>
  )
}

export default IndexPage
