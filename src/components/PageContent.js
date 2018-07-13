import React, { Component } from 'react'
class PageContent extends Component {

    render() {
        return (
            <div class="pageContent">
                {this.props.children}
            </div>
        )
    }
}

export default PageContent;