import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SeoComp"
import PrivacyPolicy from "../components/PrivacyPolicy"

export default function PrivacyPage(props) {

    return (
        <Layout>
        <Seo title="Privacy Policy" />
        <>
            <PrivacyPolicy props={props} />
        </> 
         </Layout>
    )
}

export const query = graphql` 
query myQuery {
    allSanityPolicys(filter: {name: {eq: "Privacy Policy"}}) {
        nodes {
          upd
          statement
          name
          id
        }
      }
      allSanitySections(filter: {policyRef: {eq: "Privacy Policy"}}, sort: {fields: sectNo}) {
        nodes {
          id
          sectNo
          sectHead
          policyRef
        }
      }
      allSanityParagraphs(filter: {sections: {policyRef: {eq: "Privacy Policy"}}},sort: {fields: paraNo}) {
        nodes {
          paraNo
          paraText
          id
          sectRef
        }
      }
    }
   `; 