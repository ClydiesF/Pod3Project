import React from "react";
import ReactDom from "react-dom";
import BarIndexContainer from './containers/BarIndexContainer'
import BarShowContainer from './containers/BarShowContainer'
import ReviewIndexContainer from './containers/ReviewIndexContainer'
import HomePageContainer from './containers/HomePageContainer'

const containerMap = {
  "bar-index": BarIndexContainer,
  "review-index": ReviewIndexContainer,
  "bar-show": BarShowContainer
}

for(const domId in containerMap) {
  if(document.getElementById(domId)) {
    const Component = containerMap[domId]
    ReactDom.render(<Component />, document.getElementById(domId))
  }
}