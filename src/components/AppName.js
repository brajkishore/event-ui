import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import AddEventButton from './AddEventButton';
import EventHistoryButton from './EventHistoryButton';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import RootView from './RootView';
import AddEventPage from './AddEventPage';
class AppName extends Component {

    constructor(props){
        super(props);
       this.onAnchorClick=this.onAnchorClick.bind(this); 
    }

    onAnchorClick(){
           this.props._setPage(<AddEventPage/>); 
    }
    render() {
        return (
            <div className="appname">
                    <Typography variant="title" color="primary">
                        <a href="javascript:void(0);" onClick={this.onAnchorClick}>Eventify</a>
                    </Typography>
                    
            </div>
        );
    }
}

export default AppName;