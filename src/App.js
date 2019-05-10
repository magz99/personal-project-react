import React from 'react';
import './App.css';
import Login from './components/login.component';
import EventList from './components/eventlist.component';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      loggedIn: false,
      username: null
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin( name ) {
    //console.log("in handleLogin");
    //console.log("name: " + name);
    this.setState(
      {
        loggedIn: true,
        username: name
      }
    );
  }


  render() {
    return (
      <div className="App">
        { this.state.loggedIn ? <EventList username={this.state.username} /> : <Login clickHandler={this.handleLogin} /> }
      </div>
    );
  }
  
}

export default App;
