import React from 'react';

class Login extends React.Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            uName: '',
            btnDisabled: true
        }
       
    }

    // Fetch the user's data
    componentDidMount() {
        this.setState({
            btnDisabled: false
        })
    };
    
    handleInput( name ) {
        //console.log( name );
        //.state.uName = name;
        this.setState({
            uName: name
        });
    };

    render() {
        return(<>
                <h1>Please Enter Your Github Username</h1>
                <input type="text" value={this.state.uName} onChange={(e) => this.handleInput(e.target.value)} placeholder="Enter your username"/>
                <button type="button" className="temp" disabled={this.state.btnDisabled} onClick={()=> this.props.clickHandler(this.state.uName)}>Submit</button>
            </>);
    }
}

export default Login;