// @flow
import * as React from 'react'
import { Title, Layout, Button, ExternalLink, Subtitle } from '../styles'
import '../styles/index.css'

export default class Index extends React.Component<*> {
  render() {
    return (
      <Layout>
        <Title>plsvote</Title>
        <Subtitle>
          Welcome to plsvote. We&#39;re working on our country selector - till then, how about going to our UK site?
        </Subtitle>
        <ExternalLink nostyle href="/uk">
          <Button>Take me there</Button>
        </ExternalLink>
      </Layout>
    )
  }
}
