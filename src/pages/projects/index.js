import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
  // console.log(data.projects.nodes[0].frontmatter.thumb.childImageSharp.gatsbyImageData)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects & Websites I've Created</h3>
          <div className={styles.projects}>
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt="Banner" quality={100} />
                  <h3>{ project.frontmatter.title }</h3>
                  <p>{ project.frontmatter.stack }</p>
                </div>
              </Link>
            ))}
          </div>
          <p>Like what you see? Email me at <a href="mailto:{ contact }">{ contact }</a> for a quote!</p>
        </div>
    </Layout>
  )
}


// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          id
          childImageSharp {
            gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`