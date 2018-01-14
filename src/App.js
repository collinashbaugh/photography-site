import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
import Photos from './components/Photos';
import ContactPage from './components/ContactPage'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/ContactPage" componenet={ContactPage}/>
        <MuiThemeProvider>
            <TitleBar/>
            <Photos/>
        </MuiThemeProvider>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
