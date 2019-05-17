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
        { this.props.formProps.loggedIn ? 
        <EventList  
          forkData={this.props.dataProps.forkData} 
          pullData={this.props.dataProps.pullData}
          username={this.props.formProps.username} 
          fetchUserPulls={this.props.fetchUserPulls}
          fetchUserRepos={this.props.fetchUserRepos}
        /> : 
        <Login 
          handleInput={this.props.handleInput} 
          enableButton={this.props.enableButton} 
          clickHandler={this.props.handleLogin} 
          btnDisabled={this.props.formProps.btnDisabled}
          uName={this.props.formProps.uName}
        /> }
      </div>
    );
  }
  
}

export default AppComponent;
