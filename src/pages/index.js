import * as React from "react"
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"

const IndexPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Máu Kinh tế - Thắp sáng những ước mơ</title>
