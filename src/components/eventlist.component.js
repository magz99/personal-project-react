import React from 'react';
import RepoListItem from './repolistitem.component';
import PullListItem from './pulllistitem.component';

class EventList extends React.Component {
    
    // Once this Component mounts, we want to fetch the data
    componentDidMount() {
        this.props.fetchUserPulls();
        this.props.fetchUserRepos();
    };
    
    /**
     * This uses 2 other child components:
     * * listing out repository items
     * * listing out pull request items
     */
    render() {
        return(<>
                <h1>{this.props.username}'s Information</h1>
               {
                   this.props.forkData === null ? '' :
                    ( this.props.forkData.length === 0 ? <p>No Recent Forked Repository Information Available</p> :
                    <div>
                        <h2>Recently Forked Repositories:</h2>
                            <RepoListItem items={this.props.forkData} />
                    </div>)
                }
                {
                    this.props.pullData === null ? '' :
                    ( this.props.pullData.length === 0 ? <p>No Recent Pull Request Information Available</p> :
                     <div>
                            <h2>Recent Pull Requests:</h2>
                            <PullListItem items={this.props.pullData} />
                    </div>)
                }
            </>);
    }
}

export default EventList;