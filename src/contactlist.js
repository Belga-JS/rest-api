import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom'
class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contacts:[]
         }
    }

/**    ComponentDidMount(){
        axios.get("http://localhost:4000/contacts")
        .then(res => this.setState({contacts:res.data}))
    } */

componentDidMount(){
    axios.get("http://localhost:4000/contacts")
    .then(res => this.setState({contacts:res.data}))
}
delete1=(id)=>{
    axios.delete("http://localhost:4000/delete_contact/"+id)
    .then(res =>{console.log(res.data);
    window.location.reload()}
    
    )
   
}
    render() { 
        return ( 
            <div>
                {this.state.contacts.map((el) =>{
                    return(
                        <div className="contact-card" key={el._id}>
                            <p><span>Name:</span><span>{el.name}</span></p>
                            <p><span>Phone:</span><span>{el.phone}</span></p>
                            <p><span>Email:</span><span>{el.email}</span></p>
                            <p>
                            <span onClick={()=>{this.delete1(el._id)}}>Supprimer</span>
                               { /**name/:phone/:emai */}
                               <Link to={`/update/${el._id}/${el.name}/${el.phone}/${el.email}`}> <span>Edit</span></Link>
                            </p>
                        </div>
                    )
                } )}
            </div>
         );
    }
}
 
export default ContactList;