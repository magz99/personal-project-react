import React from 'react';
import RepoListItem from './repolistitem.component';
import PullListItem from './pulllistitem.component';

const EVENTS_URL = 'https://api.github.com/users/{username}/events';
const REPOS_URL = 'https://api.github.com/users/{username}/repos';
const PULL_EVENT = 'PullRequestEvent';

class EventList extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            eventData: [],
            repoData: [],
            forkData: [],
            pullData: [],
        };
    }
    fetchUserPulls() {
    
        let userUrl = EVENTS_URL;
        userUrl = userUrl.replace('{username}', this.props.username );
        //console.log( userUrl );

        fetch(userUrl)
        .then( response => response.json() )
        .then( data => { this.setState( { eventData: data } ); } )
        .then( () => {
            //console.log("what is eventData: " + this.state.eventData );
            const pullReqs = this.state.eventData.filter(  ( eventItem ) => { 
                return eventItem.type === PULL_EVENT;
            } );

            this.setState({
                pullData: pullReqs
            });
        })
        .catch(err => console.log(err.message));

        //console.log("pull events: " + pullEvents);
    };

    fetchUserRepos() {
        let reposUrl = REPOS_URL;
        reposUrl = reposUrl.replace('{username}', this.props.username );
       
        fetch(reposUrl)
        .then( response => response.json() )
        .then( data => {
            this.setState( { repoData: data } );
        }  )
        .then( () => {
            //console.log("what is repoData: " + this.state.repoData );
            const forkedRepos = this.state.repoData.filter(  ( repoItem ) => { 
                return repoItem.fork;
            } );

            this.setState({
                forkData: forkedRepos
            });
        })
        .catch(err => console.log(err.message));

        //console.log("userRepos: " + userRepos);
    };

    componentDidMount() {
        this.fetchUserPulls();
        this.fetchUserRepos();
    };
    

    render() {
        return(<>
                <h1>{this.props.username}'s Information</h1>
               {
                   this.state.forkData === null ? '' :
                    ( this.state.forkData.length === 0 ? <p>No Recent Forked Repository Information Available</p> :
                    <div>
                        <h2>Recently Forked Repositories:</h2>
                            <RepoListItem items={this.state.forkData} />
                    </div>)
                }
                {
                    this.state.pullData === null ? '' :
                    ( this.state.pullData.length === 0 ? <p>No Recent Pull Request Information Available</p> :
                     <div>
                            <h2>Recent Pull Requests:</h2>
                            <PullListItem items={this.state.pullData} />
                    </div>)
                }
            </>);
    }
}

export default EventList;