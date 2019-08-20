import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Head from "../components/Head"

const NotFound = () => (
  <Layout>
    <Head title="404 NotFound" />
    <h1>Page Not Found</h1>
    <div>
      <Link to="/">Head Home</Link>
    </div>
  </Layout>
)

export default NotFound
