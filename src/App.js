import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import ContactList from './contactlist';
import Updatecontact from './updatecontact'
import ContactAdd from './contactAdd'


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Contact App</h1>
      
      
      <Link to={`/contacts`}><button>Contact List</button></Link>
      <Link to={`/add`}><button>Add</button></Link>
      
      
     
    
    
    
    
      <div className="add-contact">
  
      <Route exact path='/contacts' component={ContactList}/>
      <Route exact path='/add' component={ContactAdd}/>

      <Route exact path='/update/:id/:name/:phone/:email' component={Updatecontact}/>
      </div>
    </div>
    </Router>
  );
}

export default App;

