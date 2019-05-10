import React from 'react';

class EventList extends React.Component {
    
    render() {
        return(<>
                <h1>{this.props.username}'s Information</h1>
               <div>
                   <h2>Recently Forked Repositories:</h2>
                    <ul>
                        <li>Temp</li>
                    </ul>
               </div>
               <div>
                    <h2>Recent Pull Requests:</h2>
                    <ul>
                        <li>Temp</li>
                    </ul>
               </div>
               
            </>);
    }
}

export default EventList;