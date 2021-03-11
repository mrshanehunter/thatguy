import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEOComp"
import PrivacyPolicy from "../components/PrivacyPolicy"

export default function PrivacyPage(props) {

    return (
        <Layout>
        <SEO title="Privacy Policy" />
        <>
            <PrivacyPolicy props={props} />
        </> 
         </Layout>
    )
}

export const query = graphql` 
query myQuery {
    allSanityPolicys {
        nodes {
          upd
          statement
          name
          id
        }
      }
      allSanitySections {
        nodes {
          id
          sectNo
          sectHead
          policys {
              _ref
          }
        }
      }
      allSanityParagraphs {
        nodes {
          paraNo
          paraText
          id
          sections {
              _ref
          }
        }
      }
    }
   `; 