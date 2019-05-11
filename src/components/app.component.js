import React from 'react';
import '../styles/App.css';
import Login from './login.component';
import EventList from './eventlist.component';

class AppComponent extends React.Component {
  /**
   * 2 Main Child Components: 
   * Login view in order to input the username
   * Results (EventList) view to list out the repos for the user
   * 
   * Passing in all the props they will need. (Is this right?)
   */
  render() {
    return (
      <div className="App">
        { this.props.loggedIn ? 
        <EventList  
          forkData={this.props.forkData} 
          pullData={this.props.pullData}
          username={this.props.username} 
          fetchUserPulls={this.props.fetchUserPulls}
          fetchUserRepos={this.props.fetchUserRepos}
        /> : 
        <Login 
          handleInput={this.props.handleInput} 
          enableButton={this.props.enableButton} 
          clickHandler={this.props.handleLogin} 
          btnDisabled={this.props.btnDisabled}
          uName={this.props.uName}
        /> }
      </div>
    );
  }
  
}

export default AppComponent;
