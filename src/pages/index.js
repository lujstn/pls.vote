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
      .get(`https://freegeoip.app/json/`)
      .then(result => {
        const {
          data: { country_code, country_name },
        } = result
        this.setState({
          loading: false,
          error: false,
          country: country_name,
          countryCode: country_code.toLowerCase(),
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  /* todo: replace failed location with a country picker based on md files */
  render() {
    const { loading, error, countryCode } = this.state
    return (
      <>
        {!loading ? (
          countryCode != null ? (
            <Redirect noThrow to={'/' + countryCode} />
          ) : error ? (
            <Layout>
              <Title>plsvote</Title>
              <Subtitle>
                We couldn&#39;t get your location. How about the UK site?
              </Subtitle>
              <ExternalLink nostyle href="/uk">
                <Button>Take me there</Button>
              </ExternalLink>
            </Layout>
          ) : null
        ) : null}
      </>
    )
  }
}
