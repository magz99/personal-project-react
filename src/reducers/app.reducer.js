const formReducer = ( state = {
    loggedIn: false,
    username: '',
    uName: '',
    btnDisabled: true,
}, action ) => {
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
        default:
            return state;
    }
};

const dataReducer = (state= {
    forkData: [],
    pullData: [],
}, action) => {
    switch (action.type) {        
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
  
//export dataReducer;

export {dataReducer, formReducer};