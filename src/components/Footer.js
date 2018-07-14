import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import AddEventButton from './AddEventButton';
import EventHistoryButton from './EventHistoryButton';
import AppName from './AppName';
class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p>copyright @2018</p>
            </div>
        );
    }
}

export default Footer;