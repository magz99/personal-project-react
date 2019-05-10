import React from 'react';

class RepoListItem extends React.Component {
    render() {
        return(<>
                <ul className="repo-items">
                    {this.props.items.map( (item)=> <li key={item.id}><a href="{item.html_url}">{item.full_name}</a></li>)}
                </ul>
            </>);
    }
}

export default RepoListItem;