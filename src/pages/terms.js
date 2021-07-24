import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SeO from "../components/SEOComp"
import TermsPolicy from "../components/TermsPolicy"

export default function TermsPage(props) {

    return (
        <Layout>
        <SeO title="Terms and Conditions" />
        <>
            <TermsPolicy props={props} />
        </> 
         </Layout>
    )
}

export const query = graphql` 
query termsQuery {
    allSanityPolicys(filter: {name: {eq: "Terms & Conditions"}}) {
        nodes {
          upd
          statement
          name
          id
        }
      }
      allSanitySections(filter: {policyRef: {eq: "Terms & Conditions"}}, sort: {fields: sectNo}) {
        nodes {
          id
          sectNo
          sectHead
          policyRef
        }
      }
      allSanityParagraphs(filter: {sections: {policyRef: {eq: "Terms & Conditions"}}},sort: {fields: paraNo})  {
        nodes {
          paraNo
          paraText
          id
          sectRef
        }
      }
    }
   `; 