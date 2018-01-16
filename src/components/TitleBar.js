import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import './ToolbarStyle.css'
import { Link } from 'react-router-dom'


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
      <Toolbar className="ToolBar">
        <ToolbarGroup firstChild={true}>
            <Link to="/"><ToolbarTitle 
            className="TitleName"
            text="Noah's Photography" /></Link>
        </ToolbarGroup>
        <ToolbarGroup>
            <FontIcon className="material-icons">photo_camera</FontIcon>
            <ToolbarSeparator />
            <RaisedButton label="About" />
            <ToolbarSeparator />
            <Link to="/Contact"><RaisedButton label="Contact" primary={true} /></Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TitleBar;