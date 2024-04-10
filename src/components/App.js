import React from 'react'
import Dropdown from './Dropdown';
import Home from './Home'

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      isShow:false,
      selected:"Not Selected",

      // items array
      items:["Node js","React js","SQL", "MongoDb","Java","Python"]
    } 
  }

  // On hovering of the button, show the drop down items function
  handleMouseEnter=()=>{
    this.setState({
      isShow:true
    })
  }
  clickAnywhere=(e)=>{
    e.preventDefault();
    this.setState({
      isShow:false
    })
  }


  // On click of an option in dropdown list, close the dropdown function
  handleOnClick=(item)=>{
    this.setState({
      isShow:false,
      selected:item
    })
  }

  render() {
    return (
      <div className='app' onClick={this.clickAnywhere}>
        <Home isShow={this.state.isShow} handleMouseEnter={this.handleMouseEnter} />
        {this.state.isShow?<Dropdown items={this.state.items} handleOnClick={this.handleOnClick}/>:""}
        <p className='ans-p'>Ans. {this.state.selected}</p>
      </div>
    )
  }
}

