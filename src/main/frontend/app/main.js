import React from "react"
import ReactDom from "react-dom"
import HomePageContainer from './containers/HomePageContainer'
import BarIndexContainer from './containers/BarIndexContainer'
import BarShowContainer from './containers/BarShowContainer'
import ReviewIndexContainer from './containers/ReviewIndexContainer'
import BarIndexCurrentUserContainer from './containers/BarIndexCurrentUserContainer'
import NavBar from './components/NavBar'

const containerMap = {
  "bar-index": BarIndexContainer,
  "review-index": ReviewIndexContainer,
  "bar-show": BarShowContainer,
  "home-index": HomePageContainer,
  "bar-index-currentUser": BarIndexCurrentUserContainer,
  "NavBar": NavBar,
  "navLogin": NavBar,
  "navRegistration": NavBar
}

for (const domId in containerMap) {
  if (document.getElementById(domId)) {
    const Component = containerMap[domId]
    ReactDom.render(<Component />, document.getElementById(domId))
  }
}
