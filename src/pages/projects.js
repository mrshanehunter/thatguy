import React from "react";
import { graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import SEO from "../components/SEOComp";
import Projects from "../components/Projects";

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes;

  return( 
    <Layout>
      <SEO title="Projects" />
    <Container className="w-75 mx-auto p-3">
      <Projects projects={projects}/>
    </Container>
    </Layout>
  )
}

export const query = graphql`
  query projectsQuery {
    projects: allSanityProjects(sort: {fields: client}){
      nodes {
        id
        client
        industry
        service1
        service2
        service3
        service4
        service5
        service6
        service7
        service8
        service9
        service10
        service11
        service12
        image {
          asset {
            fixed(width: 300, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;