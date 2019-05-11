import React from 'react';

class Login extends React.Component {
    // Enable the button only once the component mounted
    componentDidMount() {
        this.props.enableButton();        
    };

    render() {
        return(<>
                <h1>Please Enter Your Github Username</h1>
                <input 
                    type="text" 
                    value={this.props.uName} 
                    onChange={(e) => this.props.handleInput(e.target.value)} 
                    placeholder="Enter your username"/>
                <button 
                    type="button" 
                    className="temp" 
                    disabled={this.props.btnDisabled ? 'disabled' : '' } 
                    onClick={()=> this.props.clickHandler(this.props.uName) }
                >Submit</button>
            </>);
    }
}

export default Login; 