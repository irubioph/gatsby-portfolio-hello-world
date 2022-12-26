import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Home({ data }) {
console.log(data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>Web developer &bull; Cyclist &bull; Dad</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="I'm IvanRubio"/>

      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "home-ivan.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
    childrenImageSharp {
      id
    }
  }
}
`