import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import AddEventButton from './AddEventButton';
import EventHistoryButton from './EventHistoryButton';
import AppName from './AppName';
import AddEventPage from './AddEventPage';
class Header extends Component {

    render() {
        return (
            <div className="header">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <AppName _setPage={this.props._setPage}/>
                        <AddEventButton _setPage={this.props._setPage}/>
                        <EventHistoryButton _setPage={this.props._setPage}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;