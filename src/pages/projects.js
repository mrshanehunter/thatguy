import React from "react";
import { graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import Seo from "../components/SeoComp";
import Projects from "../components/Projects";

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes;

  return( 
    <Layout>
      <Seo title="Projects" />
    <Container className="mt-4 justify-contents-center" style={{ maxWidth: `90%`, margin: `0 auto`}}>
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
            gatsbyImageData(
              width: 500, height: 500, layout: CONSTRAINED, placeholder: BLURRED, formats: [WEBP, AVIF, AUTO]
            )
            }
          }
        }
      }
    }

`;