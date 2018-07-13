import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import AddEventPage from './AddEventPage';
class AddEventButton extends Component {

    constructor(props) {
        super(props);        
        this.onButtonClick=this.onButtonClick.bind(this);
    }

    onButtonClick(){
        this.props._setPage(<AddEventPage/>);
    }

    render() {
        return (
            <Button color="inherit" onClick={this.onButtonClick}>
                <Typography variant="button" color="inherit">
                    Add Event
                </Typography>
            </Button>
        );
    }
}

export default AddEventButton;