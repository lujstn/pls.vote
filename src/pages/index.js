// @flow
import * as React from 'react'
import { Title, Layout, Button, ExternalLink, Subtitle } from '../styles'
import '../styles/index.css'

export default class Index extends React.Component<*> {
  render() {
    return (
      <Layout>
        <Title>pls.vote</Title>
        <Subtitle>
          Welcome to pls.vote. We&#39;re working on our country selector - till then, how about going to our UK site?
        </Subtitle>
        <ExternalLink nostyle href="/gb">
          <Button>Take me there</Button>
        </ExternalLink>
      </Layout>
    )
  }
}
