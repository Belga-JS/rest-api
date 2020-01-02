import React, { Component } from 'react'
import Axios from 'axios';

export default class Updatecontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            phone:'',
            email:''
         }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount() {
        const params=this.props.match.params
        this.setState({
            id:params.id,
            name:params.name,
            phone:params.phone,
            email:params.email
        })
    }
    UpdateContact=()=>{
        let modifiedContact ={
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email
        }
        Axios.put('http://localhost:4000/update/'+this.state.id,modifiedContact)
    }
    render() {
        return (
            <div>
                <input name="name" placeholder="name" type="text" value={this.state.name} onChange={(e) =>this.handleChange(e)} /><br/>
                <input name="phone" placeholder="phone" type="text" value={this.state.phone} onChange={(e) =>this.handleChange(e)}/><br/>
                <input name="email" placeholder="email" type="text" value={this.state.email} onChange={(e) =>this.handleChange(e)}/>
            <span onClick={this.UpdateContact}>modifier</span>
            
            </div>
        )
    }
}

