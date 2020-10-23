import React, { Component } from 'react';
import './App.css';
import GetApi from "./components/get.js"
import PostApi from "./components/post.js"

class App extends Component {
   render() {
      return (
         <div className = "App">
            <div>Welcome to Get api method</div>
            <div><GetApi /></div>
            <div>Welcome to Post api method</div>
            <div><PostApi /></div>
         </div>
      );
   }
}
export default App;
