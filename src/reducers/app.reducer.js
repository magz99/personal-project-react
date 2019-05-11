const defaultState = {
    loggedIn: false,
    username: '',
    uName: '',
    btnDisabled: true,
    forkData: [],
    pullData: [],
  };

const appReducer = (state=defaultState, action) => {
    switch (action.type) {
        case "HANDLE_LOGIN":
            return {
                ...state,
                loggedIn: true,
                username: action.payload,                
            };
        case "HANDLE_INPUT":
            return {
                ...state,
                uName: action.payload,
            };
        case "ENABLE_BUTTON":
            return {
                ...state,
                btnDisabled: false,
            };
        case "SET_FORK_DATA":
            return {
                ...state,
                forkData: action.payload,
            };
        case "SET_PULL_DATA":
            return {
                ...state,
                pullData: action.payload,
            }
        default:
            return state;
    }
  };
  
export default appReducer;