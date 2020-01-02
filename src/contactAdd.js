import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
class ContactAdd extends Component {
  constructor(props){
    super(props)
    this.state=({
      name:'',
      tel:'',
      email:'',
    })
  }
  setName=e=> {
    this.setState({
    name:e.target.value
  })}
  setTel=e=> {  this.setState({
    tel:e.target.value
  })}
  setEmail=e=> {  this.setState({
    email:e.target.value
  })}
  addcontact = () => {
    if (this.state.name !== '' && (this.state.tel !== '' || this.state.email !== '')) {
    axios.post("http://localhost:4000/contact",{
     name:this.state.name,tel:this.state.tel,email:this.state.email
    })
  }
else { alert('Required fields!! Name or tel or email') }
}
       render() {
        return (
           <form >
        <h2>
          ADD contact Page
        </h2>
        <br/>
        <br/>
        <span className="subtitle">NAME:</span>
        <br/>
        <input type="text" onChange={this.setName}  />
        <br/>
        <span className="subtitle">Tel:</span>
        <br/>
        <input type="text" onChange={this.setTel}  />
        <br/>
        <br/>
        <span className="subtitle">EMAIL:</span>
        <br/>
        <input type="email" onChange={this.setEmail}  />
        <br/>
        <br/>
        <br/>
   <span onClick={this.addcontact} >Submit</span> 
     </form>
      );
    }
}
export default ContactAdd