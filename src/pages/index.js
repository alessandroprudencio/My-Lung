import React from 'react'

import { graphql } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

import { ContentBox, GlobalStyle } from '../styles/layout/styles'

import { DragArea } from '../components/upload/dragArea'

export default (props) => {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage
        style={{ width: '100%', height: '100vh' }}
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <ContentBox>
          <DragArea />
        </ContentBox>
      </BackgroundImage >
    </>
  )
}

export const pageQuery = graphql`
   query{
    indexImage: file(relativePath: { eq: "background.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
   
`;