// @flow
import * as React from 'react'
import axios from 'axios'
import { Redirect } from '@reach/router'
import { Title, Layout, Button, ExternalLink, Subtitle } from '../styles'
import '../styles/index.css'

type State = {
  loading: boolean,
  error: boolean,
  country: string,
  countryCode: string,
}

export default class Index extends React.Component<*, State> {
  state = {
    loading: false,
    error: false,
    country: '',
    countryCode: '',
  }

  componentDidMount() {
    this.fetchIPLocation()
  }

  fetchIPLocation = () => {
    this.setState({ loading: true })
    axios
      .get(`http://ip-api.com/json/?fields=status,country,countryCode`)
      .then(result => {
        const {
          data: { status, country, countryCode },
        } = result
        if (status !== 'success') {
          this.setState({
            loading: false,
            error: true,
          })
        } else {
          this.setState({
            loading: false,
            error: false,
            country: country,
            countryCode: countryCode.toLowerCase(),
          })
        }
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  render() {
    const { countryCode } = this.state
    return (
      <>
        {this.state.loading ? null : countryCode ? (
          <Redirect noThrow to={'/' + countryCode} />
        ) : (
          <Layout>
            <Title>plsvote</Title>
            <Subtitle>
              We couldn&#39;t get your location. How about the UK site?
            </Subtitle>
            <ExternalLink nostyle href={'/' + countryCode}>
              <Button>Take me there</Button>
            </ExternalLink>
          </Layout>
        )}
      </>
    )
  }
}
