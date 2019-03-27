// @flow
import * as React from 'react'
import { Title, ExternalLink, Layout, Copy } from '../styles'
import '../styles/index.css'

export default class ErrorPage extends React.Component<*> {
  render() {
    /* todo: replace with a country picker based on md files */
    return (
      <Layout>
        <Title large>
          Sorry, we can&#39;t find the page you&#39;re looking for
        </Title>
        <br />
        <Copy>
          This could be because there&#39;s no voting page for this country yet.
        </Copy>
        <ExternalLink href="/">Go back home&nbsp;&rsaquo;</ExternalLink>
      </Layout>
    )
  }
}
