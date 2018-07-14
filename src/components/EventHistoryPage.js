import React, { Component } from 'react'
import ListView from './ListView';
class EventHistoryPage extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:'1',
                    eventName:'Event 1',
                    eventSD:'gerghrehgtroitrhdbnvdkgiurhitrbre geg egegtiuer498437trvfdbv uegerbgf'
                },
                {
                    id:'2',
                    eventName:'Event 2',
                    eventSD:'gerghrehgtroitrhdbnvdkgiurhitrbre geg egegtiuer498437trvfdbv uegerbgf'

                },
                {
                    id:'3',
                    eventName:'Event 3',
                    eventSD:'gerghrehgtroitrhdbnvdkgiurhitrbre geg egegtiuer498437trvfdbv uegerbgf'
                },
                {
                    id:'4',
                    eventName:'Event 3',
                    eventSD:'gerghrehgtroitrhdbnvdkgiurhitrbre geg egegtiuer498437trvfdbv uegerbgf'
                },
                {
                    id:'5',
                    eventName:'Event 3',
                    eventSD:'gerghrehgtroitrhdbnvdkgiurhitrbre geg egegtiuer498437trvfdbv uegerbgf'
                }
            ]    
        }
    }
    render() {

        return (
            <div class="eventHistoryPage">
                <ListView data={this.state.data}/>
            </div>
        )
    }
}

export default EventHistoryPage;