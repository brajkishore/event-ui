import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import EventHistoryPage from './EventHistoryPage';
class EventHistoryButton extends Component {



    constructor(props) {
        super(props);        
        this.onButtonClick=this.onButtonClick.bind(this);
    }

    onButtonClick(){
        this.props._setPage(<EventHistoryPage/>);
    }
      
    render() {
        return (
            <div>
            <Button color="inherit" onClick={this.onButtonClick}>
                <Typography variant="button" color="inherit">
                    Event History
                </Typography>
            </Button>
            </div>
        );
    }
}

export default EventHistoryButton;