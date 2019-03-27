// @flow
import React from 'react'
import { graphql } from 'gatsby'
import type { FrontmatterProps } from '../utils/props'
import {
  Copy,
  ExternalLink,
  Subtitle,
  Title,
  Layout,
  TitleGroup,
  Button,
  List,
  TitleGroupButtonContainer,
  TitleGroupTextContainer,
  Card,
  Content,
} from '../styles'
import '../styles/index.css'

class View extends React.Component<FrontmatterProps> {
  renderQualifiers = (qualifiers: Object) => {
    let criteria = qualifiers.map((val, i) => (
      <li key={i + '-' + Math.random()}>{val}</li>
    ))

    return <List>{criteria}</List>
  }

  render() {
    const {
      country_name,
      title,
      description,
      registration,
      reminder,
      qualifiers,
      anonymous,
    } = this.props.data.markdownRemark.frontmatter

    return (
      <Layout>
        <TitleGroup>
          <TitleGroupTextContainer>
            <Title large>{title}</Title>
            <Subtitle>{description}</Subtitle>
            <Copy small>
              You&#39;ve been sent to this page because of your internet
              location
            </Copy>
          </TitleGroupTextContainer>
          <TitleGroupButtonContainer>
            <ExternalLink nostyle href={registration.url}>
              <Button fixed>{registration.copy}</Button>
            </ExternalLink>
            <ExternalLink
              href={
                'mailto:' +
                reminder.email_address +
                '?subject=🗳️ Reminder from plsvote&body=' +
                reminder.email_body
              }
            >
              <Button babyblue fixed>
                Remind me next week
              </Button>
            </ExternalLink>
          </TitleGroupButtonContainer>
        </TitleGroup>

        {registration.online ? (
          <Card>
            <Subtitle>
              🌐 In {country_name}, you can register online to vote
            </Subtitle>
            <Content>
              <Copy>
                It&#39;ll take you about {registration.est_time} to sign up.
                <br />
              </Copy>
            </Content>
          </Card>
        ) : (
          <Card>
            <Subtitle>
              🌐 Unfortunately, you can&#39;t register online in {country_name}
            </Subtitle>
            <Content>
              <Copy>
                However, the link below will take you straight to the form you
                need to fill out.
                <br />
                ⚠️ Make sure you don&#39;t forget to include any attachments
                requested!
                <br />⌛ It&#39;ll take you about {registration.est_time} to
                fill out.
                <br />
              </Copy>
              <ExternalLink nostyle href={registration.url}>
                <Button>{registration.copy}</Button>
              </ExternalLink>
            </Content>
          </Card>
        )}

        <Card>
          <Subtitle>✅ You&#39;ll need to meet some criteria to vote</Subtitle>
          <Content>
            <Copy>To vote in {country_name}, you must be:</Copy>
            {this.renderQualifiers(qualifiers)}
          </Content>
        </Card>

        {anonymous != null ? (
          <Card>
            <Subtitle>👤 Want to vote anonymously?</Subtitle>
            <Content>
              <Copy>
                In {country_name}, you have the ability to vote anonymously.
                <br />
                This gives you more privacy, but will take more time to
                complete.
                <br />
                <br />
                <ExternalLink href={anonymous.url}>
                  {anonymous.copy}
                </ExternalLink>
              </Copy>
            </Content>
          </Card>
        ) : null}
      </Layout>
    )
  }
}

export default function CountriesView({ data }: Object) {
  return <View data={data} />
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        country
        country_name
        title
        description
        registration {
          online
          url
          copy
          est_time
        }
        reminder {
          email_address
          email_body
        }
        qualifiers
        anonymous {
          available
          copy
          url
        }
      }
    }
  }
`
