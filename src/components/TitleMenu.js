import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class TitleMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
      }
    
    handleChange = (event, index, value) => this.setState({value});
    
    render() {
        return (
            <div>
                <AppBar>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                <MenuItem value={1} primaryText="Custom width" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                </AppBar>
            </div>
        );
    }
}