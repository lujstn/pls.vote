const ReactGA = require('react-ga')

ReactGA.initialize('UA-137041787-1')
ReactGA.set({
  appName: 'plsvote'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
