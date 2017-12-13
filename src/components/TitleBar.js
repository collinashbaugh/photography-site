import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class TitleBar extends Component {
    render() {
        return(
            <div>
                <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        );
    }
}

export default TitleBar;