import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';
import AddEventPage from './AddEventPage';
class RootView extends Component {

    constructor(props){
        super(props);
        this.state={
            comp:<AddEventPage/>
        }

        this.setPageContent=this.setPageContent.bind(this);
    }

    setPageContent(compVal){
            this.setState({
                comp:compVal
            });
            console.log('Clicked on page setup');
    }

    render() {
        return (
            <div className="rootView">
                <Header _setPage={this.setPageContent}/>
                <PageContent>
                    {this.state.comp}
                </PageContent>
                <Footer/>
            </div>
        )
    }
}

export default RootView;