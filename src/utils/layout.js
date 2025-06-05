// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'
import {
  ExternalLink,
  Subtitle,
  Copy,
  Page,
  Footer,
  Title,
  Link,
} from '../styles'

const LayoutComponent = (props: {
  children?: React.Node,
  className: string,
}) => (
  <>
    <Helmet>
      <title>pls.vote</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="making registering to vote simple, no matter where you are."
      />
      <meta
        name="keywords"
        content="register to vote, register to vote in election, voting registration, sign up to vote, sign up, register, registration, register to vote worldwide, living aboard, register to vote abroad, election, general election, primaries, voting, vote, pls.vote, pls, vote, voting simple, click to vote, one click voting, lucas, johnston, lucas johnston kurilov, monzo, monzo bank, google, imperial, imperial college, starling, starling bank, software engineer, product manager, youngest engineer, youngest software engineer, 17 years old, 18 years old, 17 year old, 18 year old, programmer, young programmer, youngest programmer"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="Cache-Control" content="max-age=200" />
      <meta name="theme-color" content="#DDD5D0" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://www.pls.vote/image.png" />
      <meta name="twitter:site" content="@lujstn" />
      <meta name="twitter:creator" content="@lujstn" />
      <meta name="twitter:title" content="Lucas Johnston Kurilov" />
      <meta
        name="twitter:description"
        content="making registering to vote simple, no matter where you are."
      />
      <meta property="og:url" content="https://www.pls.vote" />
      <meta property="og:title" content="Lucas Johnston Kurilov" />
      <meta
        property="og:description"
        content="making registering to vote simple, no matter where you are."
      />
      <meta property="og:image" content="https://www.pls.vote/image.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e5b89c" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=2"
      />
      <link rel="manifest" href="/site.webmanifest?v=2" />
      <link rel="shortcut icon" href="/favicon.png?v=2" />
    </Helmet>
    <>
      <div className={props.className}>
        <Link nostyle to="/">
          <Title small>🗳️ pls.vote</Title>
        </Link>
        <Page>{props.children}</Page>
        <Footer>
          <ExternalLink href="https://instagram.com/lujstn">
            <Subtitle active>made with ❤️ by @lujstn</Subtitle>
          </ExternalLink>
          <ExternalLink href="https://buymeacoff.ee/lujstn">
            <Copy active>
              This site costs £80/year to run
              <br />
              Buy me a coffee to help pls.vote going! ☕
            </Copy>
          </ExternalLink>
        </Footer>
      </div>
    </>
  </>
)

export default LayoutComponent
