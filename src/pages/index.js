import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

const IndexPage = function () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm PedroFrohmut, a full-stack developer living in Poá-SP</h2>
      <p>
        Need a developer?
        {" "}
        <Link to="/contact">Contact Me</Link>
      </p>

      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        Toggle Open
      </button>
      <div>{isOpen ? "IS OPEN" : "IS CLOSED"}</div>
    </Layout>
  )
}

export default IndexPage
