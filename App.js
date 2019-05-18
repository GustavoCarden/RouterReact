import React from 'react';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, NavLink, Redirect,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 

const User = (params) =>{
    return (<h1>User {params.username} </h1>);
}

class App extends Component {
 
  state = {
    loggedIn : false
  }

  loginHandle = () => {
    this.setState({loggedIn:true});
  }

  render(){

  return (
  <Router>

    <div className="App">
    
    <ul>
    <li><NavLink to="/" activeStyle={{color:'green'}}>Home</NavLink></li>
    <li><NavLink to="/about" aactiveStyle={{color:'green'}}>About</NavLink></li>
    <li><NavLink to="/user/gus" aactiveStyle={{color:'green'}}>Gus</NavLink></li>
    </ul>

    <Prompt
      when={!this.state.loggedIn}
      message = {(location)  =>{
        return location.pathname.startsWith('/user') ? 'Estas seguro?' : true;
      }}/>
    

    <input type="button" value="Entrar" onClick={this.loginHandle.bind(this)}/>
    
    <Route path="/" exact={true} render ={ () => {return(<h1>Welcome</h1>);}}></Route>
    <Route path="/about" render ={ () => {return(<h1>About</h1>);}}></Route>
    <Route path="/user/:username" render={ ({match}) => (
      this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/" />)
    )}></Route>
    </div>
    
    </Router>

  );
}
}

export default App;
