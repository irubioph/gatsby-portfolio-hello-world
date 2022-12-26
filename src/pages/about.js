import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


export default function About({ data }) {
  return (
    <Layout>
        <div>
            <h1>Who am I?</h1>

            <p>I'm a Web Developer based in Cavite, PH.</p>
            
            <p>Welcome to my piece of the net. I'm into cross-country cycling and I’ll be posting my bike-ventures very soon.</p>

            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="I'm IvanRubio"/>
        </div>
    </Layout>
  )
}

export const query = graphql`
query AboutMe {
  file(relativePath: {eq: "about-ivan.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
    childrenImageSharp {
      id
    }
  }
}
`