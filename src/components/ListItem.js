import React, { Component } from 'react'
import ItemView from './ItemView';
class ListItem extends Component {

    constructor(props){
        super(props);
        this.onItemClick=this.onItemClick.bind(this);
    }

    onItemClick(){           
        this.props.clickListener(this.props.datum.id);
    }

    render() {        
        return (            
                <li className="listItem" onClick={this.onItemClick} key={this.props.datum.id}>
                    <ItemView datum={this.props.datum}/>
                </li>            
        )
    }
}

export default ListItem;