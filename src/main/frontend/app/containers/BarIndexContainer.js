import React, {Component} from 'react';
import './BarIndexContainer.scss'
import NavBar from '../components/NavBar'

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
        <NavBar/>
        <div className="barsContainer">
          <div className="bars">
            <h1>List of Bars</h1>
            <ul>{barsArray}</ul>
          </div>
        </div>
      </div>
    )
  }
}
export default BarIndexContainer
