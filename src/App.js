import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
// import Images from './components/Images';
import Photos from './components/Photos';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <TitleBar/>
            <Photos/>
          {/* <Images/> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
