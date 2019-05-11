const EVENTS_URL = 'https://api.github.com/users/{username}/events';
const REPOS_URL = 'https://api.github.com/users/{username}/repos';
const PULL_EVENT = 'PullRequestEvent';

/****************************************************** */
const setUserInfo = payload => ({
    type: "HANDLE_LOGIN",
    payload
});

export const handleLogin = (name) => {
    return function(dispatch, getState) {
        if( name !== '' ) {
            dispatch(setUserInfo(
                name
             ));
        }        
    };
};

/****************************************************** */
const setUserName = payload => ({
    type: "HANDLE_INPUT",
    payload
});
  
export const handleInput = (name) => {
    return function(dispatch, getState) {
        dispatch(setUserName(
            name
        ));
        
    };
};

/****************************************************** */
export const enableButton = () => {
    return function(dispatch, getState) {
        dispatch({
            type: "ENABLE_BUTTON"
        });
        
    };
};

/****************************************************** */
const setPullData = payload => ({
    type: "SET_PULL_DATA",
    payload
});

export const fetchUserPulls = () => {
    return function(dispatch, getState) {
        let userUrl = EVENTS_URL;
        const state = getState();

        userUrl = userUrl.replace('{username}', state.theReducer.username );
        
        fetch(userUrl)
        .then( response => response.json() )
        .then( data => { 
            const pullReqs = data.filter(  ( eventItem ) => { 
                return eventItem.type === PULL_EVENT;
            } );
            dispatch(setPullData(pullReqs));
        } )
        .catch(err => console.log(err.message));
    }
};

/****************************************************** */
const setForkData = payload => ({
    type: "SET_FORK_DATA",
    payload
});

export const fetchUserRepos = () => {
    return function(dispatch, getState) {
        let reposUrl = REPOS_URL;
        const state = getState();
        reposUrl = reposUrl.replace('{username}', state.theReducer.username );
        
        fetch(reposUrl)
        .then( response => response.json() )
        .then( data => {
            const forkedRepos = data.filter(  ( repoItem ) => { 
                return repoItem.fork;
            } );
            dispatch(setForkData( forkedRepos ));
        }  )
        .catch(err => console.log(err.message));
    }
};