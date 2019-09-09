const ReactGA = require('react-ga')

ReactGA.initialize('UA-137041787-1')
ReactGA.set({
  appName: 'pls.vote'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
