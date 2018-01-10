import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import './ToolbarStyle.css'


class TitleBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
            <ToolbarTitle 
            className="TitleName"
            text="Noah's Photography" />
        </ToolbarGroup>
        <ToolbarGroup>
            <FontIcon className="material-icons">photo_camera</FontIcon>
            <ToolbarSeparator/>
            <RaisedButton label="About" />
            <ToolbarSeparator />
            <RaisedButton label="Contact" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TitleBar;