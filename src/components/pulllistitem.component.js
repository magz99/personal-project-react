import React from 'react';

class PullListItem extends React.Component {
    render() {
        return(<>
                <ul className="pull-items">
                    {
                         
                        this.props.items.map( (item)=> {
                            //console.log("pull list item: " +  item );
                            const {title, url, state } = item.payload.pull_request;
                            return <li key={item.id}><a href={url}>{title}</a>, state: <span className={state}>{state}</span></li>;
                        })
                        
                    }
                </ul>
            </>);
    }
}

export default PullListItem;