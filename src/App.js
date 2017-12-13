import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleMenu from './components/TitleMenu';
import TitleBar from './components/TitleBar';
// import Images from './components/Images';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <TitleMenu>
            <TitleBar/>
          </TitleMenu>
          {/* <Images/> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
