import React, {Component} from 'react';

import BarTile from '../components/BarTile'

class BarIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/bars')
    .then(response => {
      return response.json()
    })
    .then(bars => {
      this.setState( {bars: bars} )
    })
  }
  
    render() {
      let barsArray = this.state.bars.map(bar => {
        return(
          <BarTile
            key={bar.id}
            id={bar.id}
            name={bar.barName}
            location={bar.location}
          />
        )
      })

    return(
      <div>
        <h1>List of Bars</h1>
        <ul>{barsArray}</ul>
      </div>
    )
  }
}
export default BarIndexContainer
