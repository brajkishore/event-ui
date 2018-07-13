import React, { Component } from 'react'
import { Grid, TextField, AccountCircle, Button } from '@material-ui/core'
class AddEventPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventSD: '',
            eventLD: '',
            eventImgUrl: ''
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    onTextChange(event) {

        let id = event.target.id;
        let value = event.target.value;
        console.log('onTextChange event:' + id + "::" + value);
        if (id === 'eventName')
            this.setState({ eventName: value });
        else if (id === 'eventSD')
            this.setState({ eventSD: value });
        else if (id === 'eventLD')
            this.setState({ eventLD: value });
        else if (id === 'eventImgUrl')
            this.setState({ eventImgUrl: value });

    }

    onAddBtnClick() {
        console.log('Submitting event:' + this.state.eventImgUrl);
    }


    render() {
        return (
            <div class="addEventPage">
                <h3>Add Event</h3>
                <Grid spacing={8} alignContent="center">
                    <Grid item>
                        <TextField id="eventName" label="Event Name"
                            onChange={this.onTextChange} value={this.state.eventName} />
                    </Grid>
                    <div className="dividerSpace"></div>
                    <Grid item>
                        <TextField id="eventSD" label="Event Short Description"
                            onChange={this.onTextChange} value={this.state.eventSD} />
                    </Grid>
                    <div className="dividerSpace"></div>
                    <Grid item>
                        <TextField id="eventLD" label="Event Long Description"
                            onChange={this.onTextChange} value={this.state.eventLD} />
                    </Grid>
                    <div className="dividerSpace"></div>
                    <Grid item>
                        <TextField id="eventImgUrl" label="Image Url"
                            onChange={this.onTextChange} value={this.state.eventImgUrl}/>
                    </Grid>
                </Grid>
                <div className="submitBtn"></div>
                <Button variant="outlined" size="large" className="submitBtn" onClick={this.onAddBtnClick} >
                    Add</Button>
            </div>
        )
    }
}

export default AddEventPage;