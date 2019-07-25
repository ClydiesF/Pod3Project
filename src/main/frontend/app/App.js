import React, {Component} from 'React';
import BarFormContainer from './containers/BarFormContainer';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        bars:[]
    }
    this.addNewBar = this.addNewBar.bind(this)
  }

  addNewBar(formPayload) {
    console.log(formPayload)
    fetch('/api/v1/bars', {
      method: 'POST', 
      body: JSON.stringify(formPayload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      credentials:"same-origin"       
    })
  }

  render(){
    return(
      <div>
        <BarFormContainer addNewBar={this.addNewBar}/>
      </div>
    )
  }
}

export default App