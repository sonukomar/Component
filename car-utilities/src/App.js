import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './container/Home/Jumbotron';

class App extends Component {

  /* Content for the jumbotron */ 
  JumbotronContent = {
    title : 'Car Analytics',
    content: 'This is an application which is used to determine the analytics for the car usases.',
    buttonText: 'Start Now'
  }

  menu = ['Home','Item','Contact','About'];

  render() {
    return (
      <div className="App">
        <Header menu={this.menu}></Header>
        <Jumbotron jumbotronContent={this.JumbotronContent}></Jumbotron>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
