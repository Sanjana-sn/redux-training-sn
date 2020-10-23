import React, { Component } from 'react';
import './App.css';
import GetApi from "./components/get.js"
import PostApi from "./components/post.js"

class App extends Component {
   render() {
      return (
         <div className = "App">
            Welcome to react
            <div><GetApi /></div>
            <div><PostApi /></div>
         </div>
      );
   }
}
export default App;
