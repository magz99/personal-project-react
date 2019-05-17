import { connect } from "react-redux";
import { handleLogin, handleInput, enableButton,fetchUserRepos,fetchUserPulls } from "./actions/app.actions";

import AppComponent from "./components/app.component";

function mapStateToProps(state) {
  return {
    formProps: state.formReducer,
    dataProps: state.dataReducer,
  };
}

/*
loggedIn: state.formReducer.loggedIn,
    username: state.formReducer.username,
    uName: state.formReducer.uName,
    btnDisabled: state.formReducer.btnDisabled,
    forkData: state.dataReducer.forkData,
    pullData: state.dataReducer.pullData,
    */

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
