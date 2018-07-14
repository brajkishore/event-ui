import React, { Component } from 'react'
import ListItem from './ListItem';
class ListView extends Component {

    constructor(props){
        super(props);

        this.getListItemView=this.getListItemView.bind(this);
        this.onListItemClick=this.onListItemClick.bind(this);        
    }

    getListItemView(){

        let view=this.props.data.map(datum=><ListItem datum={datum} clickListener={this.onListItemClick}/>);

        console.log('returning:'+view);
        return view;
    }

    onListItemClick(key){
        console.log('clicked on item:'+key);
    }

    render() {
        return (
            <div class="listView">
                <ul>
                    {this.getListItemView()}
                </ul>
                
            </div>
        )
    }
}

export default ListView;