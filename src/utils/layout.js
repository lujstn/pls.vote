// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ExternalLink, Subtitle, Copy, Page, Footer } from '../styles'

const LayoutComponent = (props: {
  children?: React.Node,
  className: string,
}) => (
  <>
    <Helmet>
      <title>plsvote</title>
    </Helmet>
    <>
      <div className={props.className}>
        <Page>{props.children}</Page>
        <Footer>
          <ExternalLink href="https://www.twitter.com/lucasjohnston">
            <Subtitle active>made with ❤️ by @lucasjohnston</Subtitle>
          </ExternalLink>
          <ExternalLink href="https://buymeacoff.ee/lucasjohnston">
            <Copy active>
              This site costs £80/year to run
              <br />
              Buy me a coffee to help plsvote going! ☕
            </Copy>
          </ExternalLink>
        </Footer>
      </div>
    </>
  </>
)

export default LayoutComponent
