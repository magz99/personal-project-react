import { connect } from "react-redux";
import { handleLogin, handleInput, enableButton,fetchUserRepos,fetchUserPulls } from "./actions/app.actions";

import AppComponent from "./components/app.component";

function mapStateToProps(state) {
  return {
    loggedIn: state.theReducer.loggedIn,
    username: state.theReducer.username,
    uName: state.theReducer.uName,
    btnDisabled: state.theReducer.btnDisabled,
    forkData: state.theReducer.forkData,
    pullData: state.theReducer.pullData,
  };
}

const mapDispatchToProps = {
    handleLogin,
    handleInput,
    enableButton,
    fetchUserPulls,
    fetchUserRepos,
};

let AppCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default AppCtn;
