import React, {Component} from 'React'
import TextField from '../components/TextField'
import NumberField from '../components/NumberField'
import SelectField from '../components/SelectField'
import TextAreaField from '../components/TextAreaField'

class BarFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      barName:'',
      description:'',
      location:'',
      barOwner:'',
      beachOptions:['Near the Beach','Far from the Beach'],
      beachText:'Far from Beach',
      hasBeach:false
    }
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
    this.handleLocationInput = this.handleLocationInput.bind(this)
    this.handleBarOwnerInput = this.handleBarOwnerInput.bind(this)
    this.handleBeachOptionsInput = this.handleBeachOptionsInput.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

//handleChange function
handleNameInput(event) {
  this.setState({barName:event.target.value})
}

handleDescriptionInput(event) {
  this.setState({description:event.target.value})
}

handleLocationInput(event) {
  this.setState({location:event.target.value})
}

handleBarOwnerInput(event) {
  this.setState({barOwner:event.target.value})
}

//handleSelect function 
handleBeachOptionsInput(event) {
  this.setState({beachText:event.target.value})
  if(event.target.value === 'Near the Beach'){
    this.setState({hasBeach:true})
  } else {
    this.setState({hasBeach:false})
  }
}

//handleFormClear function
  handleClearForm(event){
    event.preventDefault();
    this.setState({
      barName: '',
      description:'',
      location:'',
      barOwner:'',
      beachText:'Far from Beach',
      hasBeach:false
    })
  }
//handleSubmit function
handleSubmit(event) {
  event.preventDefault();
  let formPayload = {
    barName: this.state.barName,
    description: this.state.description,
    location: this.state.location,
    barOwner: this.state.barOwner,
    hasBeach: this.state.hasBeach
  };
  this.props.addNewBar(formPayload);
  this.handleClearForm(event);
}

  render(){
    return(
      <form className="new-bar-form callout" onSubmit={this.handleSubmit}>
        <TextField
          content={this.state.barName}
          label="Bar Name"
          name="barName"
          handlerFunction={this.handleNameInput}
        />
        <br></br>
        <br></br>
        <TextAreaField
          content={this.state.description}
          label="Description"
          name="description"
          handlerFunction={this.handleDescriptionInput}        
        />
        <br></br>
        <br></br>
        <TextField
          content={this.state.location}
          label="Location"
          name="location"
          handlerFunction={this.handleLocationInput}         
        />
        <br></br>
        <br></br>
        <NumberField
          content={this.state.barOwner}
          label="Bar Owner"
          name="barOwner"
          handlerFunction={this.handleBarOwnerInput}         
        />
        <br></br>
        <br></br>       
        <SelectField 
          options={this.state.beachOptions} 
          selectedOption={this.state.beachText} 
          handlerFunction={this.handleBeachOptionsInput}
        />                                     
        <br></br>
        <br></br>
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>&emsp;
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}


export default BarFormContainer