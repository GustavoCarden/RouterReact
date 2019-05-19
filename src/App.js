import React from 'react';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, NavLink, Redirect,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LatidoMenu from './LatidoMenu';
import logo from './lto.png';

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

  handleSearch(){
    console.log('Search');
  }

  render(){

    let links = [
      { label: 'Home', link: '/' },
      { label: 'Login', link: '/about' },
      { label: 'Agregar Nuevo', link: '#hot' },
      { label: 'Noticias', link: '#contacto∫' }
    ];
        


  return (
  
  <Router>
    <div className="App">
    
    <LatidoMenu links={links} logo={logo} onSearch={this.handleSearch.bind(this)}/>

    <Prompt
      when={!this.state.loggedIn}
      message = {(location)  =>{
        return location.pathname.startsWith('/user') ? 'Estas seguro?' : true;
      }}/>
    
    <Route path="/" exact={true} render ={ () => {return(<h1>Welcome</h1>);}}></Route>
    <Route path="/about" render ={ () => {return(
      <LatidoMenu links={links} logo={logo} onSearch={this.handleSearch.bind(this)}/>
    )}}></Route>
    <Route path="/user/:username" render={ ({match}) => (
      this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/" />)
    )}></Route>
    </div>
    
    </Router>

  );
}
}

export default App;
