import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
import Photos from './components/Photos';
import Contact from './components/ContactPage'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <MuiThemeProvider>
            <TitleBar/>
            <Route exact path="/" component={Photos}/>
            <Route exact path="/Contact" component={Contact}/>
        </MuiThemeProvider>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
